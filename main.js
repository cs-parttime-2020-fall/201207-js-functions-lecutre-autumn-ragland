console.log("20 12 07 JS Functions Lecture")// check that JS file is correctly linked to HTML file

// Built In Functions
alert("Some Value");
let exampleArray = ["ex1", "ex2", "ex3"];
let removedEl = exampleArray.splice(1,1);
console.log(removedEl);

// Simple Function with Parameters

// Declare a function simpleFunction that accepts two parameters and outputs the message "My first parameter is [PARAM1]. My second parameter is [PARAM2]" to the browser console.
function simpleFunction(parameter1, parameter2){
    console.log(`My first parameter is ${parameter1}. My second parameter is ${parameter2}`);
}
// Call the function and pass in two names.
simpleFunction("Autumn", "Ragland");
// Call the function and pass in two different names
simpleFunction("FName", "LName");

// Function without Params
// Declare a function simpleFunctionWithoutParams that accepts no parameters and outputs the message "This is my second example" to the browser console.
function simpleFunctionWithoutParams(){
    console.log("This is my second example");
}
// Call the function.
simpleFunctionWithoutParams();

// Simple Functions with Added Logic

// Declare a function addNumbers that accepts two parameters and returns the sum of those numbers.
function addNumbers(num1, num2){
    return (num1 + num2);
}
let sum = addNumbers(2,5); // call function and save return value
console.log(sum); // output return value

// Output the message "The sum of [ARG1] and [ARG2] is [RETURN_VALUE]" in the browser console using the return value from the function addNumbers and the arguments passed.
// declare variables to pass into add numbers function
let numVar1 = 10;
let numVar2 = 20;
// output arguments and return value for add numbers function
console.log(`The sum of ${numVar1} and ${numVar2} is ${addNumbers(numVar1, numVar2)}`);

// Declare a function addUserNumbers that accepts two numbers and returns the sum of those numbers.
function addUserNumbers(num1, num2){
    return (num1 + num2);
}
// Prompt the user for two numbers and pass those numbers into the function addUserNumbers saving the return value into a variable sum.
let userNum1 = parseInt(prompt("Enter a number"));
let userNum2 = parseInt(prompt("Enter a number"));
let userSum = addUserNumbers(userNum1,userNum2);
// Output the message "The sum of [USER_NUM1] and [USER_NUM2] is [SUM]"in the browser console.
console.log(`The sum of ${userNum1} and ${userNum2} is ${userSum}`);

function subtractUserNumbers(num1, num2){
    return (num1 - num2);
}
let userNum3 = parseInt(prompt("enter a number"));
let userNum4 = parseInt(prompt("enter a number"));
let difference = subtractUserNumbers(userNum3, userNum4);
console.log(`The difference of ${userNum3} and ${ userNum4} is ${difference}`);

// Calling Functions in a Function

// Declare a function main that calls a function example1 and example2
function main(){
    example1("Autumn");
    example2("22");
}
main();
// Declare the function example1 that accepts one parameter and outputs the message "Your name is [PARAM]" in the browser console.
function example1(yourName){
    console.log(`Your name is ${yourName}`);
}
// Declare the function example2 that accepts one parameter and output the message "Your age is [PARAM]" to the browser console.
function example2(yourAge){
    console.log(`Your age is ${yourAge}`);
}

// Declare three functions alertTeacherName, alertStudentName, and alertDirector that all take one parameter and alert the message "[PARAM] is a [role]".
function alertTeacherName(teacherName){
    alert(`${teacherName} is a teacher`);
}
function alertStudentName(studentName){
    alert(`${studentName} is a student`);
}
function alertDirector(director){
    alert(`${director} is a director`);
}
alertTeacherName("Name");
alertStudentName("Name");
alertDirector("Name");
// Promp the user to enter their name. If the name is "Autumn" or "Kevin" call alertTeacherName. If the name is "Erin" or "Meka" call the function alertDirector. Otherwise call the function alertStudentName
let userName = prompt("enter your name");
if(userName == "Autumn" || userName == "Kevin"){
    alertTeacherName(userName);
} else if(userName == "Erin" || userName == "Meka"){
    alertDirector(userName);
}else {
    alertStudentName(userName);
}

// Call Functions in a Loop

// Declare a function alertUserName that accepts one parameter and alerts the message "You entered [PARAM]"
function alertUserName(userName){
    alert(`You entered ${userName}`);
}
// Declare a variable userNameInput and update the value of the variable 5 time by prompting the user to enter a name. Include how many more prompts of 5 remain with each iteration. Call the alertUserName function after each update the the userNameInput value, passing in that value as the function's argument.
let userNameInput;
for(let i = 1; i <= 5; i++){
    userNameInput = prompt(`Enter a name! You have ${5 - i} entries remaining`);
    alertUserName(userNameInput);
}

// Declare a function printArrayElement that accepts two parameters and output the message "[PARAM1] is at index [PARAM2].
function printArrayElement(el, indx){
    console.log(`${el} is at index position ${indx}`);
}
// Declare an array with 5 elements.
let fiveElementArray = ["dog", "cat", "fish", "bird", "turtle"];
// Iterate through the array calling the printArrayElement function on each iteration passing in the current element and current index position.
for(let i = 0; i < fiveElementArray.length; i++){
    printArrayElement(fiveElementArray[i], i);
}
