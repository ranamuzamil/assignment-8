// Write a js program to input marks of five subjects Physics, Chemistry,
// Biology, Mathematics, and Computer. Calculate percentage and grade
// according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

let phy = 80;
let chem = 78;
let bio = 68;
let maths = 100;
let comp = 98;

let marks = phy + chem + bio + maths + comp;
percentage = marks / 500 * 100;

if (percentage >= 90) {
    console.log("Grade A");  
    }
else if(percentage >= 80) {
    console.log("Grade B");  
}
else if(percentage >= 70) {
    console.log("Grade C");  
}
else if(percentage >= 60) {
    console.log("Grade D");  
}
else if(percentage >= 40) {
    console.log("Grade E");  
}
else if(percentage < 40) {
    console.log("Grade F");  
}

