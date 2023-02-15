// Write a js program to input the week number and print weekday.

const weekNumber = 3;

const date = new Date();
date.setFullYear(new Date().getFullYear()); // set year to current year
date.setMonth(0); // set month to January (month 0)
date.setDate(1); // set date to the first day of January
date.setDate(date.getDate() + (weekNumber - 1) * 7); // set date to first day of input week

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekdayName = weekdays[date.getDay()];

console.log(`The first day of week ${weekNumber} is ${weekdayName}`);