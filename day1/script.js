// Inputs from prompt
let studentname = prompt("What's your name?")
let faculty = prompt("What's your faculty?")
let rollno = prompt("What's your exam roll number?")
let gpa1 = parseFloat(prompt("What's your GPA of 1th Semester?"))
let gpa2 = parseFloat(prompt("What's your GPA of 2th Semester?"))
let gpa3 = parseFloat(prompt("What's your GPA of 3th Semester?"))
let gpa4 = parseFloat(prompt("What's your GPA of 4th Semester?"))
let gpa5 = parseFloat(prompt("What's your GPA of 5th Semester?"))
let gpa6 = parseFloat(prompt("What's your GPA of 6th Semester?"))
let gpa7 = parseFloat(prompt("What's your GPA of 7th Semester?"))
let gpa8 = parseFloat(prompt("What's your GPA of 8th Semester?"))

//cgpa calculation
let cgpa =parseFloat( (gpa1+gpa2+gpa3+gpa4+gpa5+gpa6+gpa7+gpa8)/8).toFixed(2)

//displaying results as alerts
alert(`I am ${studentname} ,i am enrolled in ${faculty}. My exam roll is ${rollno} and I scored ${cgpa} in my Bachelor's.`)