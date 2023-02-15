// Write a js program to input the month number and print the number of days in that month.

const monthNumber = 2;

if (monthNumber < 1 || monthNumber > 12) {
    console.log("Invalid month number");
}
else {
    const year = new Date().getFullYear(); // get current year
    const daysInMonth = new Date(year, monthNumber, 0).getDate(); // get number of days in month
    console.log(`There are ${daysInMonth} days in month ${monthNumber}`);
}