// ...s : make arr, spread arr
export const partial = (fn, ...args) => fn.bind(null, ...args);
