// Custom *once* function

function once(fn) {
  let whatToOutput;
  return () => {
    if (fn) {
      whatToOutput = fn();
      fn = null;
    }
  };
}

const fire = () => {
  console.log("Fire!");
};

const f = once(fire);

f();
f();
f();
f();
