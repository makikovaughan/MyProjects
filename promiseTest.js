function getNumber(num) {
  return new Promise(function (resolve, reject) {
    // if number is greater than or less than 3, return the number
    if (num >= 3) {
      setTimeout(function () {
        resolve(num);
      }, 1000);
    } else {
      reject("Falied!");
    }
  });
}

// number is 3
getNumber(3)
  .then(function (result) {
    console.log(result);
    //return 3 + 3 to getNumber(6)
    return result + 3;
  })
  .then(function (result) {
    //return lik getNumber(9)
    console.log(result);
    return result + 3;
  })
  .then(function (result) {
    // The result will be 9
    console.log(result);
  })
  .catch(function (error) {
    // If the number is less than 3, it will be error
    console.log(error);
  });
