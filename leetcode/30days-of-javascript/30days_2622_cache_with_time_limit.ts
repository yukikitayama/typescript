type MapEntry = {
  value: number;
  timeout: NodeJS.Timeout;
}

class TimeLimitedCache {
  cache = new Map<number, MapEntry>();
  
  constructor() {
  }
  
  set(key: number, value: number, duration: number): boolean {
      const v = this.cache.get(key);
      
      // if it's not undefined, meaning the key-value exist
      // then we are updating the value, but need to clear the previous timer
      if (v) {
          clearTimeout(v.timeout);
      }

      const timeoutId = setTimeout(() => this.cache.delete(key), duration);

      this.cache.set(key, { value: value, timeout: timeoutId });
      
      if (v) {
          return true;
      } else {
          return false;
      }
  }
  
  get(key: number): number {
      if (this.cache.has(key)) {
          return this.cache.get(key).value;
      } else {
          return -1;
      }
  }
  
  count(): number {
      return this.cache.size;
  }
}

/**
* const timeLimitedCache = new TimeLimitedCache()
* timeLimitedCache.set(1, 42, 1000); // false
* timeLimitedCache.get(1) // 42
* timeLimitedCache.count() // 1
*/