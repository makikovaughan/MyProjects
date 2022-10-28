//Create an object called team to store information
const team = {
  _players: [
    { firstName: "Chipper", lastName: "Jones", age: 40 },
    { firstName: "Andrew", lastName: "Jones", age: 35 },
    { firstName: "John", lastName: "Smolts", age: 25 },
  ],
  _games: [
    { opponent: "Giants", teamPoints: 10, opponentPoints: 5 },
    { opponent: "Marines", teamPoints: 5, opponentPoints: 5 },
    { opponent: "Angels", teamPoints: 12, opponentPoints: 3 },
  ],
  //Getter method for _players
  get players() {
    return this._players;
  },
  //Getter method for _games
  get games() {
    return this._games;
  },
  //Add a player
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },
  //Add a new game
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

//Add a new player
team.addPlayer("Bugs", "Bunny", 76);

//Log all players
console.log(team.players);

//Add a new game
team.addGame("Titans", 100, 98);

//Log all games
console.log(team.games);
