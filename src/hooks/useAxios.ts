import Axios from "axios";
import {
  AxiosCacheInstance,
  buildStorage,
  setupCache,
} from "axios-cache-interceptor";
import axiosRetry from "axios-retry";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 60 * 60 * 24 * 7 });

/**
 * This storage method utilizes `NodeCache` in combination with `axios-cache-interceptor`
 * in order to store data on the server to reduce load inflicted by this application
 * on other websites
 */
const cacheStorage = buildStorage({
  find(key) {
    return cache.get(key);
  },

  set(key, value) {
    cache.set(key, value);
  },

  remove(key) {
    cache.del(key);
  },
});

/**
 * This hook ensures the creation of a consistent axios object with sensible defaults
 * throughout the application, with automatic retry (3 times), and the usage of a cache
 * w/ a TTL of 24 hours
 * @returns {AxiosCacheInstance}
 */
const useAxios = () => {
  const instance = Axios.create();
  const axios = setupCache(instance, {
    ttl: 1000 * 60 * 60 * 24, // 24 hours
    methods: ["post", "get"],
    storage: cacheStorage,
  });

  axiosRetry(axios, { retries: 3 });

  return axios;
};

export default useAxios;

