import Axios from "axios";
import { StorageValue, buildStorage } from "axios-cache-interceptor";
import { setupCache } from "axios-cache-interceptor/dev";
import NodeCache from "node-cache";

export const cache = new NodeCache({ stdTTL: 60 * 60 * 24 * 7 });

const cacheStorage = buildStorage({
  find(key) {
    return new Promise((resolve) => {
      let value = cache.get(key);

      if (value == undefined) {
        resolve(undefined);
      } else {
        resolve(value as StorageValue);
      }
    });
  },

  set(key, value) {
    cache.set(key, value);
  },

  remove(key) {
    cache.del(key);
  },
});

const useAxios = () => {
  const instance = Axios.create();
  const axios = setupCache(instance, {
    ttl: 1000 * 60 * 60 * 24, // 24 hours
    methods: ["post", "get"],
    storage: cacheStorage,
  });

  return axios;
};

export default useAxios;
