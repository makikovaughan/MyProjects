// Create promise1, 2, 3 separately
var promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
  }, 300);
});

var promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
  }, 1000);
});

var promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
  }, 500);
});

// Use Promise.all to run all together.
Promise.all([promise1, promise2, promise3]).then(function () {
  console.log("Fourth");
});

console.log("First");

setTimeout(function () {
  console.log("Third");
}, 600);

console.log("Second");
