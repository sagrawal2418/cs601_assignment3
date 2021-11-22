//declare variables
var addNumAgain = false;
var inputName;
var num1;
var num2;

alert("Welcome to Javascript Calculator Program"); //alert to show when the user enter the program first time
inputName = prompt("Please enter your name:"); //prompt the user to enter their name
alert("Welcome " + inputName + "!"); //welcome the user by appending the name they entered from previous step

//start of a loop, this will execute first time without checking condition
do {
  num1 = parseInt(prompt("Please enter your first number:")); //user is prompted to enter the first number

  while (!Number.isInteger(num1)) {
    //check here if user entered valid number or not and run the loop until user enter correct value
    num1 = parseInt(prompt("Please enter valid first number:")); //prompt the user to enter the valid number
  }
  num2 = parseInt(prompt("Please enter your second number:")); //user is prompted to enter the second number

  while (!Number.isInteger(num2)) {
    //check here if user entered valid number or not and run the loop until user enter correct value
    num2 = parseInt(prompt("Please enter valid second number:")); //prompt the user to enter the valid number
  }

  //function to add two numbers and return the sum
  function sumOfTwoNumbers(num1, num2) {
    return num1 + num2;
  }

  var sum = sumOfTwoNumbers(num1, num2); //create a variable and assign the value from the function to it
  alert("The sum of your two numbers is: " + sum); //show the alert message with the message and sum of two number

  //handle conditions
  if (sum > 10) {
    alert("That is a big number");
  } else if (sum <= 10) {
    alert("That is a small number");
  }
  var answer = prompt("Do you want to add two numbers again?Enter yes/no"); //save user response from the prompt

  //check if answer is yes or no
  if (answer == "yes") {
    addNumAgain = true; //update the flag so that loop can run again
  } else if (answer == "no") {
    alert("Thank you for using the Javascript Calculator Program"); //show thank you message
    addNumAgain = false; //update the flag so that loop ends.
  }
} while (addNumAgain); //check for the flag so that it can either continue or stop
