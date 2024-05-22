class RateLimiter {
  windowSize: number;
  maxRequests: number;
  idToWindows: Map<string, Array<number>>;
  idToExtendedWindows: Map<string, number>;

  constructor(config: { windowSize: number; maxRequests: number }) {
    this.windowSize = config.windowSize;
    this.maxRequests = config.maxRequests;
    this.idToWindows = new Map<string, Array<number>>();
    this.idToExtendedWindows = new Map<string, number>();
  }

  limit(id: string) {
    const now = Date.now();

    // Get queue or initialize it
    let queue = this.idToWindows.get(id);
    if (!queue) {
      queue = [];
      this.idToWindows.set(id, queue);
    }

    // Clear old windows
    let windowSize = this.windowSize;
    if (this.idToExtendedWindows.has(id)) {
      const extendedWindowSize = this.idToExtendedWindows.get(id);
      if (extendedWindowSize !== undefined) {
        windowSize = extendedWindowSize;
      }
    }
    while (queue.length > 0 && now - queue[0] > windowSize) {
      queue.shift();
    }

    if (queue.length >= this.maxRequests) {
      // Double the window size for this id
      this.idToExtendedWindows.set(id, this.windowSize * 2);
      return true;
    }

    // If the id has not exceeded the rate limit in the extended window, reset the window size
    if (this.idToExtendedWindows.has(id) && queue.length < this.maxRequests) {
      this.idToExtendedWindows.delete(id);
    }

    // Add current window to queue
    queue.push(now);

    return false;
  }
}

export { RateLimiter };
