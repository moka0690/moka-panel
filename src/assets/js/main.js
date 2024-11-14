
function cacheDecorator(func) {
  const cache = new Map();
  return function (n) {
    if (cache.has(n)) {
      return cache.get(n);
    }
    const result = func(n);
    cache.set(n, result);
  };
}
const cacheDecorator= cacheDecorator(functionAny)
