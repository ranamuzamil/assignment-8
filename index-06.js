// Write a js program to check whether a year is leap year or not.

let year = 2010;

function checkLeapYear(year) {

  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      console.log(year + ' is a leap year');
  } else {
      console.log(year + ' is not a leap year');
  }

}

checkLeapYear(year);