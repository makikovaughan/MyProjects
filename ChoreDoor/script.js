// Access HTML elements
//Access three door image
let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

//Access the "Good luck!" button
let startButton = document.getElementById("start");

let botDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/space.svg";
let closedDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

// Define game logic to check doors, progress game, end game, and choose a random chore door
//isClicked(door): a function to check if the door that the player clicked on is closed.
const isClicked = (door) => {
  //Check if src property of door is equal to closedDoorPath. If it is the same, return true. Otherwise, return false.
  if (door.src === closedDoorPath) {
    return true;
  } else {
    return false;
  }
};

//isBot(door):  Checks if the player clicked on the Chore Door
// src of door is equal to botDoorPath, return true. Otherwise, return false
const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

//gameOver(status) : Displays a game over message depending on whether the player has won or lost.
const gameOver = (status) => {
  if (status === "win") {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  //Initialize the game
  currentlyPlaying = false;
};

//playDoor(door): Decrements numClosedDoors by one after clicking one of the door
const playDoor = (door) => {
  numClosedDoors--;

  //If numClosedDoors is 0, all three doors were opened without ChoreBot. Call gameOver("win").
  if (numClosedDoors === 0) {
    gameOver("win");
  }
  //Call isBot(door) to check if the door that is clicked is the bot door. If it is, call gameOver without any arguments.
  else if (isBot(door)) {
    gameOver();
  }
};

//randomChoreDoorGenerator: generate a random number to select the Chore Bot door.
const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);

  //Create conditions based on the choreDoor
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
};

doorImage1.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
};

// Start a game round
//startRound(): Initialize the game
const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = "Good Luck!";
  randomChoreDoorGenerator();
};

//Start the game by calling startRound()
startRound();
