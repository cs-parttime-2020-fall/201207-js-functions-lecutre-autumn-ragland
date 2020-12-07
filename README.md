# 20 12 07 JS Functions Lecture

## Set Up
1. Create an html file with an `h1` rendering the assignment title
1. Create a JS file 
1. Link the JS file before the closing `body` tag using the `script` tag
1. Open the HTML file in the browser
1. Print the assignment title in the browser from the JS file to be sure that files are linked correctly

## Lecture 
1. Built in Functions + Array Methods Review
    - Output the text "Some Value" to the browser console.
    - Alert the text "Some Value" in the browser.
    - Declare an array with three values and output the array to the browser console.
    - Remove the second element from the array using the array splice method
1. Simple Function with Parameters
    - Declare a function `simpleFunction` that accepts two parameters and outputs the message "My first parameter is [PARAM1]. My second parameter is [PARAM2]" to the browser console.
    - Call the function and pass in two names.
    - Call the function and pass in two different names.

1. Simple Function without Parameters
    - Declare a function `simpleFunctionWithoutParams` that accepts no parameters and outputs the message This is my second example" to the browser console.
    - Call the function.

1. Simple Functions with Added Logic
    - Declare a function `addNumbers` that accepts two parameters and returns the sum of those numbers.
    - Call the function, passing in two numbers, and output the returned value to the console.
    - Output the message "The sum of [ARG1] and [ARG2] is [RETURN_VALUE]" in the browser console using the return value from the function `addNumbers` and the arguments passed.
    - Declare a function `addUserNumbers` that accepts two numbers and returns the sum of those numbers.
    - Prompt the user for two numbers and pass those numbers into the function `addUserNumbers` saving the return value into a variable `sum`.
    - Output the message "The sum of [USER_NUM1] and [USER_NUM2] is [SUM]"in the browser console.
    - Repeat for a function `subtractUserNumbers`

1. Calling Functions in a Function 
    - Declare a function `main` that calls a function `example1` and `example2`
    - Declare the function `example1` that accepts one parameter and outputs the message "Your name is [PARAM]" in the browser console.
    - Declare the function `example2` that accepts one parameter and output the message "Your age is [PARAM]" to the browser console.
    - Call the main function.

1. Calling Functions in an If Statement
    - Declare thee functions `alertTeacherName`, `alertStudentName`, and `alertDirector` that all take one parameter and alert the message "[PARAM] is a [role]".
    - Promp the user to enter their name. If the name is "Autumn" or "Kevin" call `alertTeacherName`. If the name is "Erin" or "Meka" call the function `alertDirector`. Otherwise call the function `alertStudentName`

1. Call Functions in a Loop
    - Declare a function `alertUserName` that accepts one parameter and alerts the message "You entered [PARAM]"
    - Declare a variable `userNameInput` and update the value of the variable 5 time by prompting the user to enter a name. Include how many more prompts of 5 remain with each iteration. Call the `alertUserName` function after each update the the `userNameInput` value, passing in that value as the function's argument. 
    - Declare a function `printArrayElement` that accepts two parameters and output the message "[PARAM1] is at index [PARAM2].
    - Declare an array with 5 elements.
    - Iterate through the array calling the `printArrayElement` function on each iteration passing in the current element and current index position.