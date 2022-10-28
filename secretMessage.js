let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

//Initial message
console.log(`Initial Message: ${secretMessage.join(" ")}`);

//Remove the last item
secretMessage.pop();

//Print out the length of array
console.log(secretMessage.length);

//Add the words to and Program at the end of array
secretMessage.push("to", "Program");

//Change the word easily to right
secretMessage[7] = "right";

//Remove the first string of the array
secretMessage.shift();

//Add Programming to the beginning of the array
secretMessage.unshift("Programming");

//Remove the strings and replace them to know
secretMessage.splice(6, 5, "know");

//Print the secret message using join()
console.log(`The secret message: ${secretMessage.join(" ")}`);
