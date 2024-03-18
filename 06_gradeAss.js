// Assignment of grade calculation

function gradeCalculation(marks) {
    if (typeof marks !== 'number' || marks < 0 || marks > 100 || isNaN(marks)) {
        console.log("Please provide valid marks");
    } else if (marks >= 90) {
        console.log(`Fantastic marks: ${marks}, Your grade is A+`);
    } else if (marks >= 75 && marks < 90) {
        console.log(`Excellent marks: ${marks}, Your grade is A`);
    } else if (marks >= 50 && marks < 75) {
        console.log(`Good marks: ${marks}, Your grade is B`);
    } else if (marks >= 35 && marks < 50) {
        console.log(`Marks: ${marks}, Your grade is C, Need improvement`);
    } else {
        console.log(`Marks: ${marks}, Your grade is F, Need significant improvement`);
    }
}

// Invoking the function for various test cases
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);
