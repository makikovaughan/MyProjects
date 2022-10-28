const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    //Check the spell of userInput
    switch (userInput) {
      case "rock":
      case "paper":
      case "scissors":
      case "bomb":
        return userInput;
        break;
      //Spell does not match
      default:
        console.log(`User, please check your spells: ${userInput}`);
        return "Error";
        break;
    }
  };
  
  //Determine rock, paper, scissors by random number.
  const getComputerChoice = () => {
    //Create a random nubmer between 0 and 2.
    const randomNumber = Math.floor(Math.random() * 3);
  
    /*If the number is 0, rock 
  If the number is 1, paper
  If the number is 2, scissors */
    switch (randomNumber) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
        break;
      default:
        console.log("Something is wrong");
        break;
    }
  };
  
  //Takes computer choid and user choice
  const determineWinner = (userChoice, computerChoice) => {
  
    //If the user type bomb, they win
    if(userChoice === "bomb") {
      return "You won!";
    }
  
    //Tie game
    if (userChoice === computerChoice) {
      return "The game was tie";
    }
  
    //If userChoice is rock
    if (userChoice === "rock") {
      //if the computer choice is paper
      if (computerChoice === "paper") {
        return "The computer won!";
      }
      //If the computer choice is scissors
      else {
        return "You won!";
      }
    }
    //If the user choice is paper
    else if (userChoice === "paper") {
      //If the computer choice is scissors
      if (computerChoice === "scissors") {
        return "The computer won!";
      }
      //If the computer choice is rock
      else {
        return "You won!";
      }
    }
    //If the user choice is scissor
    else if (userChoice === "scissors") {
      //If the computer choice is rock
      if (computerChoice === "rock") {
        return "The computer won!";
      }
      //If the computer choice is paper
      else {
        return "You won!";
      }
    } 
    //If typo
    else {
      return "User Error";
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice("bomb");
    const computerChoice = getComputerChoice();
    console.log(`User: ${userChoice} Computer: ${computerChoice}`);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  