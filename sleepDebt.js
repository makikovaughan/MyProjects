//Return the number of sleep hours based on the day of the week
const getSleepHours = (day) => {
    //Check the hour based on day of the week
    if (day === "monday") {
      return 5;
    } else if (day === "tuesday") {
      return 7;
    } else if (day === "wednesday") {
      return 14;
    } else if (day === "thursday") {
      return 6.5;
    } else if (day === "friday") {
      return 7.5;
    } else if (day === "saturday") {
      return 9;
    } else if (day === "sunday") {
      return 7;
    } else {
      //Spell Error
      return `Error: Please check the spell. ${day}`;
    }
  };
  
  //Get the total sleep hours a week.
  //Call getSleepHours for each day of the week to total sleep hours for a week.
  const getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  
  //Get the ideal sleep hours per week
  const getIdealSleepHours = hours => {
    const idealHours = hours;
    return idealHours * 7;
  };
  
  //Calculate the sleep debt
  const calculateSleepDebt = () => {
    //Set to the actual sleep hours
    const actualSleepHours = getActualSleepHours();
  
    const idealSleepHours = getIdealSleepHours(8);
  
    //Check if there is a sleep debt
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep");
    } else if (actualSleepHours > idealSleepHours) { //Sleep more than ideal sleep hours
      console.log("You got more sleep than needed.");
    } else { //If there is a sleep debt
      console.log("You should get some rest.");
    };
  };
  
  calculateSleepDebt();
  