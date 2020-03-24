// Custom *curry* function ***

const sum = (a, b, c, d) => {
  return a + b + c + d;
};
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const f = curry(sum);

console.log(f(1, 2, 3, 4));
console.log(f(1)(2)(3)(4));
console.log(f(1, 2)(3, 4));
console.log(f(1)(2, 3, 4));
