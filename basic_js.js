//TOPIC: Comments

// This is a single line comment

/*
*   This is multi-line (block)
*   comment
*/

//TOPIC: Variables
//Variable names are called identifiers. Identifiers could start with letters, _, $, but no start with a number

var 99;                         //wrong
var 99problems;                 //wrong
var problems99;                 //correct

//variable can have an initial value or not
var age = 25;                   //instantiated variable (with initial value)
var age;                        //uninstantatiated variable

//variables are case-sensitive
var x;                          //these are two different variables
var X;

//variable names can be in camel case or separated by underscore
var studentMaidenName;
var instructor_last_name;

//TOPIC: data types
var myVariable = 200;           //number, can be integers (whole numbers), float (decimals), negative numbers
var myVariable = "Hello";       // strings, series of characters
var myVariable = true;          //boolean, true or false 
var myVariable = {              //object, a structued data composed of key (left side), value (right side) pairs
    first_variable : 4,
    second_variable : false
}

//declaring string values
var my_string = "Hello world"    //can use single or double quotes
var your_string = 'Hello world'


//TOPIC: Conditionals (if else statement)
var amount = 500;

if(amount < 1000){
    console.log("It's less than  1000")
}else{
    console.log("It's greater than 1000")
}

//if else-if else statement
var amount = 500;

if(amount < 1000){
    console.log("It's less than  1000")
}else if(amount == 500){
    console.log("It's equal to 500")
}else{
    console.log("It's greater than 1000")
}

//arithmetic operators
var score = 10

score = score + 10;             //these are same 
score += 10;

score -=10;                     //can do with other arithmetic operations
score *=10;
score /=10;


//comparison operators
/*
> greater than
< less than
== equal, non-strict 
=== equal, strict
>= greater than or equal
<= less than or equal
!== not equal, non-strict
!=== not equal, strict
*/

var a = 5
var b = "5"

if(a == b){
    console.log('equal')
}else{
    console.log('not equal')
}

if(a === b){
    console.log('equal')
}else{
    console.log('not equal')
}