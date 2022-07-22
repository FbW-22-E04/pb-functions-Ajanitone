// **1. Add Up.**
// Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples:
// * sumIntFrom1ToN(4) ➞ 10
// * sumIntFrom1ToN(13) ➞ 91
// * sumIntFrom1ToN(600) ➞ 180300

function sumIntFrom1ToN(int) {
  let sum = 0;
  for (let i = 0; i <= int; i++) {
    sum += i;
  }
  return sum;
}

sumIntFrom1ToN();

console.log("Q1:", sumIntFrom1ToN(4));
console.log("Q1:", sumIntFrom1ToN(13));
console.log("Q1:", sumIntFrom1ToN(600));

console.log(
  "--------------------------------------------------------------------------------------"
);

// **2. Cubed.**
// Create a function that takes in three numbers and returns the sum of its cubes.

function sumOfCubes(num1, num2, num3) {
  return Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);
}

sumOfCubes();

console.log("Q2:", sumOfCubes(3, 6, 19));

console.log(
  "--------------------------------------------------------------------------------------"
);

// **3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

// Examples:
// * isStrStartOfWord("bu", "button") ➞ true
// * isStrStartOfWord("tri", "triplet") ➞ true
// * isStrStartOfWord("beau", "pastry") ➞ false

function isStrStartOfWord(str, word) {
  if (str === word.substring(0, str.length)) {
    return true;
  } else {
    return false;
  }
}

console.log("Q3:", isStrStartOfWord("bu", "button"));
console.log("Q3:", isStrStartOfWord("tri", "tripet"));
console.log("Q3:", isStrStartOfWord("bea", "beauty"));
console.log("Q3:", isStrStartOfWord("tra", "tilapia"));

console.log(
  "--------------------------------------------------------------------------------------"
);

// **4. Less Than or Equal to Zero?**
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples:
// * isLEQZero(3) ➞ false
// * isLEQZero(0) ➞ true
// * isLEQZero(-4) ➞ true
// * isLEQZero(10) ➞ false

function isLEQZero(number) {
  if (number <= 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Q4:", isLEQZero(25));
console.log("Q4:", isLEQZero(2));
console.log("Q4:", isLEQZero(-2));

console.log(
  "--------------------------------------------------------------------------------------"
);

// **5. Count Occurrences.**
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Example:
// * countOccurrences("this is a string", "i") ➞ 3

function countOccur(str, letter) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      counter++;
    }
  }
  return counter;
}

console.log("Q5", countOccur("tulli", "l"));
console.log("Q5", countOccur("turmoil city change", "t"));

console.log(
  "--------------------------------------------------------------------------------------"
);

// **6. X To The Power of X.**
// Create a function that takes a base number and an exponent number and returns the calculation. **NB:** All test inputs will be positive integers.

// Examples:
// * calcBaseToExponent(5, 5) ➞ 3125
// * calcBaseToExponent(10, 10) ➞ 10000000000
// * calcBaseToExponent(3, 3) ➞ 27

function toPower(base, exponent) {
  return base ** exponent;
}

console.log("Q6", toPower(3, 3));
console.log("Q6", toPower(3, 9));

console.log(
  "--------------------------------------------------------------------------------------"
);

// **7. Dog Years.**
// Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

// Example:
// * dogAge(4) ➞ "Your doggo is 28 years old in dog years!"

function dogAge(dogToHuman) {
  const doggy = dogToHuman * 7;
  return doggy;
}
console.log("Q7:The dog's age in dog years is:", dogAge(5));

console.log(
  "--------------------------------------------------------------------------------------"
);

// **8. A Lifetime Supply...**
// You just won a lifetime supply of your favourite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime".  Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.

// Examples:
// * calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"

// * calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"

// **Bonus:**
// 1) Accept a third argument for maximum age (just in case the snack company has a particular maximum age cut off).
// 2) Accept floating point values for amount per day and round the result (in case the snack company has some weird average calculation for amount per day).

//     * calcLifetimeSupply(32, 0.58, 65) ➞ "The snack company should provide you with 14,406 units, until you are a ripe old age of 65. Happy snacking!"

function lifeTimeSupply(age, amountDaily) {
  let maxAge = 100;
  let daysInYear = 365.25;
  const supplyCalc = Math.ceil((maxAge - age) * daysInYear * amountDaily);
  return `Q8a:The snack company should provide you with ${supplyCalc}, until you are a ripe old age of ${maxAge}. Happy snacking!"`;
}

console.log(lifeTimeSupply(15, 5));
console.log(lifeTimeSupply(32, 8));

console.log(
  "--------------------------------------------------------------------------------------"
);

function lifeTimeSupply1(age, amountDaily) {
  let maxAge = 65;
  let daysInYear = 365.25;
  const supplyCalc = Math.ceil((maxAge - age) * daysInYear * amountDaily);
  return `Q8b:The snack company should provide you with ${supplyCalc}, until you are a ripe old age of ${maxAge}. Happy snacking!"`;
}

console.log(lifeTimeSupply1(15, 5));
console.log(lifeTimeSupply1(32, 8));

// **9. Where's Waldo?**
// Create a function that takes a string and returns true if Waldo is found, and false if he's not.

// Examples:
// * isWaldoHere("is there a wal here?") ➞ false
// * isWaldoHere("I found you Waldo!") ➞ true
// * isWaldoHere("Wait, don't you mean Wally?") ➞ false
// * isWaldoHere("waldo is here") ➞ true

function isWaldoHere(string) {
  if (string.includes("Waldo")) {
    return true;
  } else {
    return false;
  }
}

console.log(
  "Q9:",
  isWaldoHere("Waldo went to the mountain to tend to the sheep")
);
console.log("Q9:", isWaldoHere("Yesterday was a great day."));

console.log(
  "--------------------------------------------------------------------------------------"
);

// **10. Pie.**
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// * Total number of slices.
// * Number of recipients.
// * How many slices each person gets.

// Examples:
// * isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices

// * isEqualSlices(8, 3, 2) ➞ true
// * isEqualSlices(8, 3, 3) ➞ false
// * isEqualSlices(24, 12, 2) ➞ true

function isEqualSlices(slices, recipients, slicePerson) {
  const slicesNeeded = recipients * slicePerson;
  return slices >= slicesNeeded;
}

console.log("Q10:", isEqualSlices(8, 3, 2));
console.log("Q10:", isEqualSlices(8, 3, 2.5));
console.log("Q10:", isEqualSlices(8, 3, 4));

// **11. XO**
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Notes:

// * Return a boolean value (true or false).
// * The string can contain any character.
// * When neither an x nor an o is in the string, return true.

// Examples:
// * isEqualNumXandO("ooxx") ➞ true
// * isEqualNumXandO("xooxx") ➞ false
// * isEqualNumXandO("ooxXm") ➞ true (case insensitive)
// * isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
// * isEqualNumXandO("zzoo") ➞ false

function numberOfXO(string) {
  let countX = 0;
  let countO = 0;
  const xO = string;
  for (let i = 0; i < string.length; i++) {
    if (xO[i] === "x") {
      countX++;
    } else if (xO[i] === "o") {
      countO++;
    }
  }
  if (countO === 0 && countX === 0) {
    return "False:There is neither an X or an O in the string";
  } else if (countO === countX) {
    return "True:We have the same amount of X's and O's in the string";
  } else {
    return "False:There is not the same amount of X's and O's in the string";
  }
}

console.log("Q11:", numberOfXO("xoxo"));
console.log("Q11:", numberOfXO("xxoxo"));
console.log("Q11:", numberOfXO("june"));

// **12. isPrime?**
// Create a function that returns true if a number is a prime number, and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// Examples:
// * isPrime(7) ➞ true
// * isPrime(9) ➞ false
// * isPrime(10) ➞ false

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
    console.log(i);
  }
  return num > 1;
}

console.log("Q12:Is this a prime number?", isPrime(1));
console.log("Q12:Is this a prime number?", isPrime(2));
console.log("Q12:Is this a prime number?", isPrime(7));

// Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

// NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

// * The string must contain exactly one "@" character
// * The string must contain at least one "." character
// * The "." and the "@" must be in the appropriate places:
//     * neither "." nor "@" can be the last character
//     * "." can neither be directly before, nor directly after, "@"
//     * there cannot be consecutive "." characters
//     * "@" must have at least one character in front of it

// Examples:
// * "j@example.com" is valid while "@example.com" is invalid
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid
// * e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid

function emailCheck(email) {
  if (
    // * The string must contain exactly one "@" character

    email.indexOf("@") !== email.lastIndexOf("@") ||
    // * The string must contain at least one "." character

    email.indexOf(".") === -1 ||
    // * The "." and the "@" must be in the appropriate places:

    email.indexOf(".") < email.indexOf("@") ||
    //     * neither "." nor "@" can be the last character

    email.indexOf(".") === email.length - 1 ||
    email.indexOf("@") === email.length - 1 ||
    //     * "." can neither be directly before, nor directly after, "@"

    email.lastIndexOf(".") < email.indexOf("@") ||
    //     * there cannot be consecutive "." characters
    email.includes("..") ||
    //     * "@" must have at least one character in front of it

    email[0] === "@" ||
    !email.includes("@")
  ) {
    return false;
  } else {
    return true;
  }
}
console.log("Q13", emailCheck("ajanitone@freenet.de"));
console.log("Q13", emailCheck("@freenet.de"));
console.log("Q13", emailCheck("ajanitone..@freenet.de"));
console.log("Q13", emailCheck("ajanitone.freenet@de"));
console.log("Q13", emailCheck("ajanitone@freenet.de@"));
console.log("Q13", emailCheck("ajanitonefreenet.de"));
