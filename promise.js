const promise = new Promise(resolve => resolve());

promise
  .then(() => {
    console.log("1");
  })
  .then(() => {
    console.log("2");
    return Promise.reject("oops");
  })
  .catch(e => {
    console.log("--->", e);
    throw new Error(e);
  })
  .then(() => {
    console.log("This should not be printed");
  });
