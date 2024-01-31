let raceNumber = Math.floor(Math.random() * 1000);

let regEarly = true; 
let runnerAge = 30;

if (regEarly && runnerAge > 18) {
    raceNumber += 1000;
}

// checking to see if this works so far
// console.log(raceNumber);

if (regEarly && runnerAge > 18) {
    console.log(`You start at 9:30am and your number is ${raceNumber}`);
} else if (!regEarly && runnerAge > 18) {
    console.log(`You start at 11:00am and your number is ${raceNumber}`);
} else {
    console.log(`You start at 12:30pm and your number is ${raceNumber}`);
}
