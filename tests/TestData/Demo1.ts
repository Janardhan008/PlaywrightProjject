message1 = "bye";  
// Assigns the string "bye" to the variable message1.

console.log(message1);  
// Prints the value of message1 ("bye") to the console.

var age1 = 20;  
// Declares a variable age1 and assigns it the numeric value 20.

console.log(age1);  
// Prints the value of age1 (20) to the console.

var isActive = false;  
// Declares a boolean variable isActive and sets it to false.

var numberArry = [1, 2, 3];  
// Declares an array named numberArry containing three numbers: 1, 2, and 3.

var data = "this could be anything";  
// Declares a variable data and assigns it a string value.

data = 42;  
// Reassigns the variable data to a number (42), showing JavaScript’s dynamic typing.

function add(a: number, b: number): number  
// Defines a function named 'add' that takes two parameters:  
// 'a' and 'b', both explicitly typed as numbers.  
// The ': number' after the parentheses specifies that the function will return a number.

{  
    return a + b;  
    // Returns the sum of 'a' and 'b'.  
    // TypeScript ensures both are numbers, preventing accidental string concatenation or type errors.
}
