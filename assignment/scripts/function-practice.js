console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {

  return "Hello, " + name + "!";
}
// Remember to call the function to test
console.log(helloName("Drew"));


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  let total = firstNumber + secondNumber;
  return total;
}// This function will add any two numbers you add as perameters
console.log(addNumbers(2, 2));


// 4. Function to multiply three numbers & return the result
function multiplyThree(first, second, third) {
  let total = first * second * third;
  return total;

}//this function will multiply and three numbers you add as perameters.
console.log(multiplyThree(3, 4, 5));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}/* This function will return either true or false depending on if the 
 number you add as a perameter is greater than 0 or less than 0. */

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length == [])
    return undefined; // i'm not sure if you wanted the '' included or not.
  else {
    return array[array.length - 1];//this part was tricky. I kept getting 2 until i re wrote this part of the code
  }

}
console.log(getLast(['a', 'b', 'c']));
console.log(getLast([]));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 


function find(value, array) {
  
  for (let i = 0; i < array.length; i++)
    if (array[i] === value) {
      return true;
    } 
    return false
  }
console.log(find("a", [1, 2, 3, "a"]));
console.log(find("Bob", [1, 2, 3, "a"]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise


function isFirstLetter(letter, string) {
  const array = string.split('');//This passes my string to the array and the .split('') make it [s, t, r, i, n, g] inseatd of [string]
    if (array[0] === letter) {
      return true;
    } else {
      return false;
    }


}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll(arr) {
  let sum = 0;
  // TODO: loop to add items
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum

  // TODO: return the sum
}
console.log(`The sum of your array is ${sumAll([1, 2, 3])}`);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] > 0) {
        newArr.push(i + 1)
    } else if (arr <= 0) {
        newArr = [];
    }
  }
    return newArr
}
  console.log(allPositive([1, 2, 3, 4]))
  console.log(allPositive([-1, -2, -3, -4]))
  console.log(allPositive([1, -2, 3, 4]))


  
 // 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

function convert(minutes) { //declares a funtion, sets the function name to 'convert' that takes one perameter.
	minutes *= 60 // this line will multiply the perameter by 60 and also set itself equil to the outcome.
	return minutes // this line will return the outcome of the previous line of code
	
}
console.log(convert(2)); //finally you call the function using whatever perameter you have given it.


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}