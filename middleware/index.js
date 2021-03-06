export default function applyMiddleware(store, middleware = []) {
  return middleware.reduceRight((acc, mw) => mw(acc), store);
}
