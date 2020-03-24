// Custom *memoize* function

const calc = n => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + i;
  }
  return sum;
};

function memoize(calc) {
  let result = {};
  return nr => {
    if (nr in result) {
      return result[nr];
    } else {
      let resultFromCalc = calc(nr);
      result[nr] = resultFromCalc;
      return resultFromCalc;
    }
  };
}
const f = memoize(calc);

console.log(f(1000000000));
console.log(f(1000000000));
console.log(f(1000000000));
