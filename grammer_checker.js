let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";

//console.log(storyWords);

//count uses as a counter and initialize by 0
let count = 0;

//Count the number of words in the story
storyWords.forEach((word) => count++);

//Log the result
console.log(`There are ${count} words in the story.`);

//Remove all unnecessary words(literally)
storyWords = storyWords.filter((word) => word !== unnecessaryWord);

//Modify misspelled words from beautifull to beautiful
storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return "beautiful";
  } else {
    return word;
  }
});

//Find an index of bad word
const badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});

//Log the index of badWord(freaking)
console.log(`Bad Word's index is ${badWordIndex}`);

//Replace a bad word from freaking to really
storyWords[badWordIndex] = "really";

//Check if every word is less than 10 characters
const lengthCheck = storyWords.every((word) => {
  return word.legnth < 10;
});

//Log the result of lengthCheck
console.log(`The value of lengthCheck is ${lengthCheck}`);

// //Replace the word longer than 10
// const longWord = storyWords.findIndex((word) => word.length > 10);

// //Log the index of the word and its word longer than 10
// console.log(
//   `The long word's index is ${longWord} and the word ${storyWords[longWord]}`
// );

// //Replace the long word to stunning
// storyWords[longWord] = "stunning";

//Try using .map

storyWords = storyWords.map((word) => {
  if (word.length > 10) {
    return "stunning";
  } else {
    return word;
  }
});

//Log the storyWords paragraph
console.log(storyWords.join(" "));
