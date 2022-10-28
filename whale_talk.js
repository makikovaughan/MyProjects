//Phrase to convert to Whale words
const input = "turpentine and turtles";

//Whale's vowels
const vowels = ["a", "e", "i", "o", "u"];

//Use vowels from input string
const resultArray = [];

//For loop for input
for (let i = 0; i < input.length; i++) {
  //console.log("i is: " + i);

  //nested loop
  for (let j = 0; j < vowels.length; j++) {
    //console.log("j is: " + j);

    //compare input letters to vowels
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);

      //if input[i] is equal to e then add one more e
      if (input[i] === "e") {
        resultArray.push(input[i]);
      }
      //if input[i] is equal to u then add one more u
      else if (input[i] === "u") {
        resultArray.push(input[i]);
      }
    }
  }
}

//Join all array values and change to all uppoer case
const resultString = resultArray.join("").toUpperCase();

//Log the whale talk
console.log("Whale Words: " + resultString);
