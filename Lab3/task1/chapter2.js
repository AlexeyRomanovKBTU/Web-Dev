// Show an alert with an external script
alert("I'm JavaScript!");


// Working with variables
let admin, name; // can declare two variables at once

name = "John";

admin = name;

alert( admin ); // "John"


// Giving the right name
let ourPlanetName = "Earth";

let currentUserName = "John";


// Uppercase const?
const BIRTHDAY = '18.04.1982'; // make birthday uppercase? - Upper

const AGE = someCode(BIRTHDAY); // make age uppercase? - Lower


// String quotes
let name = "Ilya";

// the expression is a number 1
alert( `hello ${1}` ); // hello 1

// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name

// the expression is a variable, embed it
alert( `hello ${name}` ); // hello Ilya


// A simple page
let name = prompt("What is your name?", "");
alert(name);


// The postfix and prefix forms
let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once


// Assignment result
let a = 2;

let x = 1 + (a *= 2); // a = 4, x = 5


// Type conversions
"" + 1 + 0 // = "10"
"" - 1 + 0 // = -1
true + false // = 1
6 / "3" // = 2
"2" * "3" // = 6
4 + 5 + "px" // = "9px"
"$" + 4 + 5 // = "$45"
"4" - 2 // = 2
"4px" - 2 // = NaN
"  -9  " + 5 // = "  -9  5"
"  -9  " - 5 // = -14
null + 1 // = 1
undefined + 1 // = NaN
" \t \n" - 2 // = -2


// Fix the addition
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3


// Comparisons
5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false


// if (a string with zero)
if ("0") {
  alert( 'Hello' );
} // yes


// Show the sign
let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}


// Rewrite 'if' into '?'
let result = (a + b < 4) ? 'Below' : 'Over';


// Rewrite 'if..else' into '?'
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';


// What's the result of OR?
alert( null || 2 || undefined ); // 2


// What's the result of OR'ed alerts?
alert( alert(1) || 2 || alert(3) ); // first 1, then 2


// What is the result of AND?
alert(1 && null && 2); // null


// What is the result of AND'ed alerts?
alert( alert(1) && alert(2) ); // first 1, then undenfined


// The result of OR AND OR
alert( null || 2 && 3 || 4 ); // 3


// Check the range between
if (age >= 14 && age <= 90)


// Check the range outside
if (!(age >= 14 && age <= 90))


// A question about "if"
// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );


// Check the login
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}


// Last loop value
let i = 3;

alert(i--); // shows 3, decreases i to 2

alert(i--) // shows 2, decreases i to 1

alert(i--) // shows 1, decreases i to 0

// done, while(i) check stops the loop


// Which values does the while loop show?
let i = 0;
while (++i < 5) alert( i ); // from 1 to 4

let i = 0;
while (i++ < 5) alert( i ); // from 1 to 5


// Which values get shown by the "for" loop?
for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );


// Output even numbers in the loop
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}


// Replace "for" with "while"
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}


// Repeat until the input is correct
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);


// Output prime numbers
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}


// Rewrite the "switch" into an "if"
if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}


// Rewrite "if" into "switch"
let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}


// Is "else" required?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

// No difference!
// In both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.


// Rewrite the function using '?' or '||'
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}


// Function min(a, b)
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}


// Function pow(x,n)
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}


// Rewrite with arrow functions
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);