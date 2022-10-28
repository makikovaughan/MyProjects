let raceNumber = Math.floor(Math.random() * 1000);

//Incicates where a runner is registered early or not
const registeredRunner = false;

//Runner's age
const runnerAge = 30;

//Add 1000 to the adults older than 18 and registered early
if (runnerAge > 18 && registeredRunner) {
  raceNumber += 1000;
}

/*Run at 9:30am for the adults older than 18 and registered early
Run at 11:00am for the adults older than 18 and did not registered early 
Run at 12:30pm under 18
If the runner is 18, then need to go to the registration deks. */
if (runnerAge > 18 && registeredRunner) {
  console.log(`Race Number: ${raceNumber}, you will race at 9:30am`);
} else if (runnerAge > 18 && !registeredRunner) {
  console.log(`Race Number: ${raceNumber}, Late adults run at 11:00am`);
} else if (runnerAge < 18) {
  console.log(
    `Race Number: ${raceNumber}, Youth registrants run at 12:30 pm (regardless of registration)`
  );
} else {
  console.log(`Race Number: ${raceNumber}, Please see the registration desk.`);
}
