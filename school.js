//Parent class, School
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  //Create getters for all properties
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set setNumberOfStudents(numOfStudent) {
    //If numOfStudent is not number, log the error message
    if (typeof numOfStudent !== "number") {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    } else {
      this._numberOfStudents += numOfStudent;
    }
  }
  //Method in class, School
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }
  //Pick a substitute teacher randomly from the array of sub teachers
  static pickSubstituteTeacher(substituteTeachers) {
    const randomNumber = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomNumber];
  }
}

//Create a child class, Primary
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  //getter for a new properties
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

//Create a child class MiddleSchool
class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, "middle", numberOfStudents);
  }
}

//Create a child class, HighSchool
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams, averageTestScores) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
    this._averageTestScores = averageTestScores;
  }
  //getter for the new property
  get sportsTeams() {
    return this._sportsTeams;
  }
  get averageTestScores() {
    return this._averageTestScores;
  }
}

//Create an instance of Lorraine Hansbury
const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

//Call quickFacts()
lorraineHansbury.quickFacts();

//Pick up a substitute teacher and log the result
console.log(
  `Substitute Teacher: ${PrimarySchool.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ])}`
);

//Create an instance of Al Smith
const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

//Get the value in sportsTeams property in alSmith and log the result
console.log(alSmith.sportsTeams);

//Create an instance of Middle School
const alPacino = new MiddleSchool("Al Pacino", 300);

//Call quickFacts()
alPacino.quickFacts();

//Create a class, SchoolCatalog to enter all School objects
class SchoolCatalog {
  constructor() {
    this._schoolLists = [];
  }
  get schoolLists() {
    return this._schoolLists;
  }
  //Add more school lists
  addSchoolLists(schoolList) {
    this._schoolLists.push(schoolList);
  }
  //Create a method for quickFacts and log them
  quickFacts(schoolList) {
    console.log(
      `${schoolList.name} educates ${schoolList.numberOfStudents} ${schoolList.level} school students.`
    );
  }

  //Display all informaiton
  displayInformation() {
    this._schoolLists.forEach((schoolList) => this.quickFacts(schoolList));
  }
}

//Create an instance of SchoolCatalog
const schoolCatalog = new SchoolCatalog();

//Add school information to school catalog
schoolCatalog.addSchoolLists(alPacino);
schoolCatalog.addSchoolLists(alSmith);
schoolCatalog.addSchoolLists(lorraineHansbury);

//Log the school lists
schoolCatalog.displayInformation();
