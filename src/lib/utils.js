// ...s : make arr, spread arr
export const partial = (fn, ...args) => fn.bind(null, ...args);

const basePipe = (fn1, fn2) => (...args) => fn2(fn1(...args));

export const pipe = (...fnN) => fnN.reduce(basePipe);
