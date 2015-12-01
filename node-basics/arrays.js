var grades = [100, 50, 75];
// totalGrade = 0
var totalGrade = 0;

// forEach => add grade to totalGrade
grades.forEach(function(grade) {
	totalGrade += grade;
})
console.log(totalGrade);
// console.log totalGrade / total number of grades
console.log(totalGrade / grades.length);