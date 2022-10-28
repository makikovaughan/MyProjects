//User name
let userName = "Makiko";

//Greeting based on user name
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

//User question
const userQuestion = "Am I lucky today?";

//Confirm the question
userName
  ? console.log(`${userName}, did you ask: "${userQuestion}"`)
  : console.log(`Did you ask: "${userQuestion}"`);

//Generate a number between 0 and 7 randomly
let randomNumber = Math.floor(Math.random() * 8);

//eightBall declaration
let eightBall = "";

//Assign eightBall value based on the randomNumber
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
  default:
    eightBall = "Error!";
    break;
}

//Display the Magic Eight Ball's answer.
console.log(`${eightBall}`);
