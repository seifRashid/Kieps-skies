# JavaScript Fundamentals

## Data Types

JavaScript has several primitive data types:

1. **String**: Text enclosed in quotes
   ```javascript
   // Three ways to define strings
   let name = "John";                // Double quotes
   let message = 'Hello world';      // Single quotes
   let template = `Hello, ${name}`;  // Template literals with variable interpolation
   ```

2. **Number**: Integers and floating-point values
   ```javascript
   let age = 25;       // Integer
   let price = 19.99;  // Floating-point
   let infinity = Infinity;  // Special numeric value
   let notANumber = NaN;     // Result of invalid calculations
   ```

3. **Boolean**: true or false values
   ```javascript
   let isActive = true;        // True value
   let hasPermission = false;  // False value
   ```

4. **Undefined**: Variable declared but not assigned a value
   ```javascript
   let user;  // Value is automatically set to undefined
   ```

5. **Null**: Intentional absence of any object value
   ```javascript
   let employee = null;  // Explicitly set to represent no value
   ```

6. **Symbol**: Unique and immutable values
   ```javascript
   // Creates a unique identifier
   const id = Symbol('id');
   const id2 = Symbol('id');  // Different from id even with same description
   ```

7. **BigInt**: For very large integers
   ```javascript
   // For numbers larger than Number.MAX_SAFE_INTEGER
   const bigNumber = 9007199254740991n;  // Note the 'n' at the end
   ```

## Variables

JavaScript has three ways to declare variables:

```javascript
// var (older method, function-scoped)
var count = 10;
// Can be redeclared and updated
var count = 20;  // This is allowed

// let (introduced in ES6, block-scoped, can be reassigned)
let score = 75;
score = 80;  // Reassigning is fine
// let score = 90;  // Error: Cannot redeclare block-scoped variable

// const (block-scoped, cannot be reassigned)
const PI = 3.14159;
// PI = 3;  // This would cause an error: Assignment to constant variable
// However, properties of objects declared with const CAN be changed
const user = { name: "John" };
user.name = "Jane";  // This is allowed
```

## Operators

### Arithmetic Operators
```javascript
// Basic arithmetic
let a = 10;
let b = 3;

let sum = a + b;        // Addition: 13
let difference = a - b; // Subtraction: 7
let product = a * b;    // Multiplication: 30
let quotient = a / b;   // Division: 3.3333...
let remainder = a % b;  // Modulus (remainder): 1
let power = a ** b;     // Exponentiation: 1000 (10^3)

// Increment and decrement
let x = 5;
x++;                    // Post-increment: x becomes 6
++x;                    // Pre-increment: x becomes 7
x--;                    // Post-decrement: x becomes 6
--x;                    // Pre-decrement: x becomes 5
```

### Comparison Operators
```javascript
let a = 5;
let b = "5";

// Equality comparisons
console.log(a == b);    // true (loose equality: compares values, converts types)
console.log(a === b);   // false (strict equality: compares values and types)
console.log(a != b);    // false (loose inequality)
console.log(a !== b);   // true (strict inequality)

// Relational comparisons
console.log(a > 3);     // true (greater than)
console.log(a < 10);    // true (less than)
console.log(a >= 5);    // true (greater than or equal to)
console.log(a <= 4);    // false (less than or equal to)
```

### Logical Operators
```javascript
let isLoggedIn = true;
let hasPermission = false;

// Logical AND (&&): true if both operands are true
console.log(isLoggedIn && hasPermission);  // false

// Logical OR (||): true if at least one operand is true
console.log(isLoggedIn || hasPermission);  // true

// Logical NOT (!): inverts the boolean value
console.log(!isLoggedIn);  // false
console.log(!hasPermission);  // true

// Short-circuit evaluation
let user = null;
// If user is null, default to 'Guest'
let userName = user || 'Guest';  // 'Guest'
```

### Assignment Operators
```javascript
let x = 10;

x += 5;   // Same as: x = x + 5; (x becomes 15)
x -= 3;   // Same as: x = x - 3; (x becomes 12)
x *= 2;   // Same as: x = x * 2; (x becomes 24)
x /= 4;   // Same as: x = x / 4; (x becomes 6)
x %= 4;   // Same as: x = x % 4; (x becomes 2)
x **= 3;  // Same as: x = x ** 3; (x becomes 8)
```

### Conditional (Ternary) Operator
```javascript
// condition ? expression1 : expression2
// If condition is true, returns expression1, otherwise returns expression2
let age = 20;
let status = age >= 18 ? "adult" : "minor";  // "adult"

// Can be nested (though this can reduce readability)
let message = age < 13 ? "child" : (age < 18 ? "teenager" : "adult");  // "adult"
```

## Functions

Functions are blocks of reusable code:

```javascript
// Function declaration - hoisted (can be used before declaration)
function greet(name) {
  // 'name' is a parameter (placeholder)
  return `Hello, ${name}!`;  // Return statement provides output
}

// Function expression - not hoisted
const add = function(a, b) {
  // Anonymous function assigned to a variable
  return a + b;
};

// Arrow function - more concise syntax, introduced in ES6
const multiply = (a, b) => a * b;  // Implicit return when no curly braces
const square = a => a * a;  // Parentheses optional for single parameter

// Function with default parameters
function createUser(name, age = 18, role = "user") {
  // Default values used when arguments are omitted
  return { name, age, role };  // Shorthand object property notation
}

// Rest parameters - handling multiple arguments as an array
function sum(...numbers) {
  // '...numbers' collects all arguments into an array
  return numbers.reduce((total, num) => total + num, 0);
}

// Calling functions
console.log(greet("Alice"));  // "Hello, Alice!"
console.log(add(5, 3));       // 8
console.log(multiply(4, 2));  // 8
console.log(createUser("Bob"));  // {name: "Bob", age: 18, role: "user"}
console.log(sum(1, 2, 3, 4));  // 10
```

## Control Flow

### Conditionals

```javascript
// if statement - executes a block if condition is true
let age = 15;
if (age >= 18) {
  console.log("You are an adult");
} else if (age >= 13) {
  // Multiple conditions can be checked with else if
  console.log("You are a teenager");  // This will run
} else {
  // Runs if no previous conditions were true
  console.log("You are a child");
}

// Ternary operator - compact if-else alternative
let status = age >= 18 ? "adult" : "minor";  // "minor"

// Switch statement - compares a value against multiple cases
let day = "Monday";
switch (day) {
  case "Monday":  // If day equals "Monday"
    console.log("Start of work week");
    break;  // Exit the switch statement
  case "Friday":
    console.log("End of work week");
    break;
  case "Saturday":
  case "Sunday":  // Multiple cases can share the same code
    console.log("Weekend!");
    break;
  default:  // Runs if no case matches
    console.log("Mid-week");
}
```

### Loops

```javascript
// For loop - repeats until a condition is false
for (let i = 0; i < 5; i++) {
  // Initialize; condition; increment/decrement
  console.log(i);  // Outputs: 0, 1, 2, 3, 4
}

// While loop - repeats as long as condition is true
let count = 0;
while (count < 3) {
  // Check condition first, then execute block
  console.log(count);  // Outputs: 0, 1, 2
  count++;
}

// Do-while loop - always executes once, then checks condition
let x = 0;
do {
  // Execute block first, then check condition
  console.log(x);  // Always outputs at least: 0
  x++;
} while (x < 1);

// For...of loop - iterates over iterable objects (arrays, strings)
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  // 'fruit' takes the value of each item in the array
  console.log(fruit);  // Outputs: "apple", "banana", "cherry"
}

// For...in loop - iterates over object properties
const person = { name: "John", age: 30 };
for (const key in person) {
  // 'key' is each property name in the object
  console.log(`${key}: ${person[key]}`);  // Outputs: "name: John", "age: 30"
}

// Breaking and continuing
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;  // Skip this iteration when i is 3
  if (i === 7) break;     // Exit the loop when i is 7
  console.log(i);  // Outputs: 0, 1, 2, 4, 5, 6
}
```

## Arrays

Arrays are ordered collections of items:

```javascript
// Creating arrays
const numbers = [1, 2, 3, 4, 5];  // Array literal syntax
const mixed = [1, "two", true, null, {name: "John"}];  // Can store different types
const empty = [];  // Empty array
const newArray = new Array(3);  // Creates array with length 3 (all undefined)

// Accessing elements (zero-based indexing)
console.log(numbers[0]);  // First element: 1
console.log(numbers[2]);  // Third element: 3
console.log(numbers[10]); // Undefined (index out of bounds)

// Modifying arrays
numbers[1] = 20;  // Changing an element: [1, 20, 3, 4, 5]

// Array properties and methods
console.log(numbers.length);  // Number of elements: 5

// Adding/removing elements
numbers.push(6);          // Add to end: [1, 20, 3, 4, 5, 6]
let lastItem = numbers.pop();            // Remove from end: [1, 20, 3, 4, 5], lastItem = 6
numbers.unshift(0);       // Add to beginning: [0, 1, 20, 3, 4, 5]
let firstItem = numbers.shift();          // Remove from beginning: [1, 20, 3, 4, 5], firstItem = 0
numbers.splice(2, 1, 10); // Remove 1 element at index 2 and insert 10: [1, 20, 10, 4, 5]
numbers.splice(3, 0, 25); // Insert without removing: [1, 20, 10, 25, 4, 5]

// Iteration methods
numbers.forEach(num => {
  // Executes function for each element
  console.log(num * 2);  // Outputs: 2, 40, 20, 50, 8, 10
});

// Transformation methods
const doubled = numbers.map(num => num * 2);  // Creates new array: [2, 40, 20, 50, 8, 10]
const evens = numbers.filter(num => num % 2 === 0);  // New array with elements that pass test: [20, 10, 4]
const sum = numbers.reduce((total, num) => total + num, 0);  // Single value from array: 65

// Finding elements
const found = numbers.find(num => num > 10);  // First element that satisfies condition: 20
const index = numbers.findIndex(num => num === 10);  // Index of first match: 2
const includes5 = numbers.includes(5);  // Check if element exists: true

// Other useful methods
const joined = numbers.join(', ');  // Convert to string: "1, 20, 10, 25, 4, 5"
const sorted = [...numbers].sort((a, b) => a - b);  // Sort numerically: [1, 4, 5, 10, 20, 25]
const reversed = [...numbers].reverse();  // Reverse order: [5, 4, 25, 10, 20, 1]
```

## Objects

Objects store data as key-value pairs:

```javascript
// Creating objects
const user = {
  // Object literal syntax with property: value pairs
  name: "John",  // String property
  age: 30,       // Number property
  isAdmin: false,  // Boolean property
  skills: ["JavaScript", "HTML", "CSS"],  // Array property
  address: {     // Nested object
    city: "New York",
    zipcode: "10001"
  },
  // Method: function property
  greet: function() {
    // 'this' refers to the object itself
    return `Hello, I'm ${this.name}`;
  },
  // Shorthand method syntax (ES6)
  sayAge() {
    return `I am ${this.age} years old`;
  }
};

// Accessing properties
console.log(user.name);     // Dot notation: "John"
console.log(user["age"]);   // Bracket notation: 30 (useful for dynamic keys)
console.log(user.address.city);  // Accessing nested property: "New York"

// Adding/modifying properties
user.location = "New York";  // Add new property
user.age = 31;               // Modify existing property
delete user.isAdmin;         // Remove a property

// Object methods
console.log(user.greet());  // "Hello, I'm John"
console.log(user.sayAge()); // "I am 31 years old"

// Checking if property exists
console.log("name" in user);  // true
console.log(user.hasOwnProperty("email"));  // false

// Object static methods
console.log(Object.keys(user));    // Array of property names: ["name", "age", "skills", "address", "greet", "sayAge", "location"]
console.log(Object.values(user));  // Array of values: ["John", 31, Array(3), Object, ƒ, ƒ, "New York"]
console.log(Object.entries(user)); // Array of [key, value] pairs

// Copying objects
const userCopy = Object.assign({}, user);  // Shallow copy
const userCopy2 = { ...user };             // Spread operator (shallow copy)
```

## Destructuring

Destructuring allows you to extract values from arrays and objects:

```javascript
// Array destructuring
const rgb = [255, 100, 50];
// Extract values into variables
const [red, green, blue] = rgb;
console.log(red);   // 255
console.log(green); // 100

// Skip elements with commas
const [first, , third] = [1, 2, 3];  // first = 1, third = 3

// Rest pattern to collect remaining items
const [head, ...tail] = [1, 2, 3, 4];  // head = 1, tail = [2, 3, 4]

// Default values
const [a, b, c, d = 0] = [1, 2, 3];  // d gets default value: 0

// Swapping variables without temporary variable
let x = 5, y = 10;
[x, y] = [y, x];  // x = 10, y = 5

// Object destructuring
const person = { name: "Sarah", age: 28, job: "Developer" };
// Extract properties into variables
const { name, job } = person;
console.log(name);  // "Sarah"
console.log(job);   // "Developer"

// With different variable names
const { name: fullName, age: years } = person;
console.log(fullName);  // "Sarah"
console.log(years);     // 28

// With default values
const { hobby = "Reading" } = person;
console.log(hobby);  // "Reading" (default value since it doesn't exist)

// Rest pattern with objects
const { name: userName, ...rest } = person;  // rest = { age: 28, job: "Developer" }

// Nested destructuring
const company = {
  name: "TechCorp",
  address: {
    city: "San Francisco",
    state: "CA"
  }
};
const { address: { city, state } } = company;
console.log(city);  // "San Francisco"
console.log(state); // "CA"

// Destructuring in function parameters
function printUserInfo({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
printUserInfo(person);  // "Sarah is 28 years old"
```

## Error Handling

```javascript
// Try-catch blocks for handling exceptions
try {
  // Code that might throw an error
  const result = notDefinedVariable + 5;  // Variable doesn't exist
} catch (error) {
  // This block runs if an error occurs in the try block
  console.log("An error occurred:", error.message);  // "An error occurred: notDefinedVariable is not defined"
} finally {
  // This code always runs, regardless of whether an error occurred
  console.log("Process complete");
}

// Throwing custom errors
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    // Validate input types
    throw new TypeError("Both arguments must be numbers");
  }
  if (b === 0) {
    // Check for division by zero
    throw new Error("Division by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));  // 5
  console.log(divide(10, 0));  // Throws Error: Division by zero!
} catch (error) {
  console.log(error.name);     // "Error"
  console.log(error.message);  // "Division by zero!"
}
```

## DOM Events

Events are actions or occurrences that happen in the browser:

```javascript
// Basic event handling
// Select an element
const button = document.querySelector('#myButton');

// Add an event listener
button.addEventListener('click', function(event) {
  // 'event' object contains information about the event
  console.log('Button was clicked!');
  console.log('Event type:', event.type);  // "click"
  console.log('Target element:', event.target);  // The button element
});

// Event with arrow function
const input = document.querySelector('#myInput');
input.addEventListener('input', (e) => {
  // Track input changes
  console.log('Current value:', e.target.value);
});

// Mouse events
const box = document.querySelector('.box');
box.addEventListener('mouseenter', () => {
  // Triggered when mouse enters the element
  box.style.backgroundColor = 'lightblue';
});

box.addEventListener('mouseleave', () => {
  // Triggered when mouse leaves the element
  box.style.backgroundColor = 'white';
});

// Keyboard events
document.addEventListener('keydown', (e) => {
  // Triggered when a key is pressed
  console.log(`Key pressed: ${e.key}`);
  if (e.key === 'Escape') {
    console.log('Escape key was pressed');
  }
});

// Form events
const form = document.querySelector('#myForm');
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();
  console.log('Form submitted!');
  
  // Get form data
  const formData = new FormData(form);
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});

// Event bubbling and delegation
document.querySelector('#parent').addEventListener('click', (e) => {
  // Event delegation - handle events for all children with one listener
  if (e.target.className === 'child') {
    console.log('A child element was clicked');
  }
});

// Stop event propagation
document.querySelector('#child').addEventListener('click', (e) => {
  e.stopPropagation();  // Prevents the event from bubbling up
  console.log('Child clicked, parent will not receive event');
});

// Custom events
const customEvent = new CustomEvent('userLoggedIn', {
  detail: { userId: 123, username: 'john' }
});

// Dispatch the custom event
document.addEventListener('userLoggedIn', (e) => {
  console.log(`User logged in: ${e.detail.username}`);
});
document.dispatchEvent(customEvent);
```

## Common JavaScript Methods

### String Methods

```javascript
const str = "JavaScript is amazing";

// Finding and extracting
console.log(str.length);                   // 22 (length property, not a method)
console.log(str.indexOf("Script"));        // 4 (position of substring, -1 if not found)
console.log(str.includes("amazing"));      // true (checks if string contains substring)
console.log(str.startsWith("Java"));       // true (checks if string starts with substring)
console.log(str.endsWith("ing"));          // true (checks if string ends with substring)
console.log(str.charAt(0));                // "J" (character at position)
console.log(str.substring(0, 4));          // "Java" (extract from start to end-1)
console.log(str.slice(-7));                // "amazing" (can use negative indices)

// Transforming
console.log(str.toUpperCase());            // "JAVASCRIPT IS AMAZING"
console.log(str.toLowerCase());            // "javascript is amazing"
console.log(str.replace("amazing", "awesome")); // "JavaScript is awesome"
console.log(str.replaceAll("a", "x"));     // "JxvxScript is xmxzing" (replaces all occurrences)
console.log("  Hello  ".trim());           // "Hello" (removes whitespace from both ends)
console.log("Hello".padStart(10, "-"));    // "-----Hello" (pads to specified length)
console.log("Hello".repeat(3));            // "HelloHelloHello"

// Splitting and joining
console.log(str.split(" "));               // ["JavaScript", "is", "amazing"]
console.log(["Java", "Script"].join(""));  // "JavaScript"
```

### Array Methods

```javascript
// Creating and converting arrays
console.log(Array.from("hello"));          // ["h", "e", "l", "l", "o"] (creates array from iterable)
console.log(Array.of(1, 2, 3));            // [1, 2, 3] (creates array from arguments)
console.log(Array.isArray([1, 2, 3]));     // true (checks if value is an array)

// Finding and searching
const numbers = [1, 2, 3, 4, 5, 2];
console.log(numbers.indexOf(2));           // 1 (first index of element, -1 if not found)
console.log(numbers.lastIndexOf(2));       // 5 (last index of element)
console.log(numbers.includes(3));          // true (checks if array contains element)
console.log(numbers.find(n => n > 3));     // 4 (first element that satisfies condition)
console.log(numbers.findIndex(n => n > 3));// 3 (index of first element that satisfies condition)
console.log(numbers.every(n => n > 0));    // true (checks if all elements satisfy condition)
console.log(numbers.some(n => n > 4));     // true (checks if any element satisfies condition)

// Transforming
console.log(numbers.map(n => n * 2));      // [2, 4, 6, 8, 10, 4] (transforms each element)
console.log(numbers.filter(n => n % 2 === 0)); // [2, 4, 2] (filters elements by condition)
console.log(numbers.reduce((sum, n) => sum + n, 0)); // 17 (reduces to single value)
console.log(numbers.sort((a, b) => a - b)); // [1, 2, 2, 3, 4, 5] (sorts array)
console.log([3, 1, 4].sort());             // [1, 3, 4] (default is string comparison)
console.log(numbers.reverse());            // [5, 4, 3, 2, 2, 1] (reverses array)

// Manipulation
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr1.concat(arr2));           // [1, 2, 3, 4] (combines arrays)
console.log(arr1.slice(0, 1));            // [1] (returns copy of portion)
arr1.push(3);                             // Add to end: [1, 2, 3]
arr1.pop();                               // Remove from end: [1, 2]
arr1.unshift(0);                          // Add to start: [0, 1, 2]
arr1.shift();                             // Remove from start: [1, 2]
arr1.splice(1, 0, 1.5);                   // Insert at index: [1, 1.5, 2]
```

### Object Methods

```javascript
const user = { name: "John", age: 30 };
const address = { city: "New York" };

// Object creation and manipulation
console.log(Object.keys(user));           // ["name", "age"] (array of property names)
console.log(Object.values(user));         // ["John", 30] (array of property values)
console.log(Object.entries(user));        // [["name", "John"], ["age", 30]] (array of [key, value] pairs)
console.log(Object.assign({}, user, address)); // Combines objects: {name: "John", age: 30, city: "New York"}
console.log({...user, ...address});       // Same as above, using spread operator

// Property manipulation
Object.defineProperty(user, 'email', {
  value: 'john@example.com',
  writable: true,        // Can be reassigned
  enumerable: true,      // Shows up in for...in loops
  configurable: true     // Can be deleted or modified
});

// Object protection
const frozenObj = Object.freeze({x: 1});  // Makes object immutable
// frozenObj.x = 2;  // Error in strict mode, silent failure otherwise
console.log(Object.isFrozen(frozenObj));  // true

const sealedObj = Object.seal({y: 1});    // Prevents adding/removing properties
// sealedObj.z = 2;  // Can't add property
sealedObj.y = 2;     // But can modify existing properties
console.log(Object.isSealed(sealedObj));  // true
```

### Math Methods

```javascript
// Math constants
console.log(Math.PI);                    // 3.141592653589793
console.log(Math.E);                     // 2.718281828459045

// Basic operations
console.log(Math.abs(-5));               // 5 (absolute value)
console.log(Math.round(4.7));            // 5 (round to nearest integer)
console.log(Math.ceil(4.1));             // 5 (round up)
console.log(Math.floor(4.9));            // 4 (round down)
console.log(Math.trunc(4.9));            // 4 (truncate decimal part)
console.log(Math.sign(-3));              // -1 (sign of number: -1, 0, or 1)

// Powers and roots
console.log(Math.pow(2, 3));             // 8 (2 to the power of 3)
console.log(Math.sqrt(16));              // 4 (square root)
console.log(Math.cbrt(8));               // 2 (cube root)

// Min and max
console.log(Math.min(5, 3, 9, 1));       // 1 (minimum value)
console.log(Math.max(5, 3, 9, 1));       // 9 (maximum value)

// Random numbers
console.log(Math.random());              // Random number between 0 (inclusive) and 1 (exclusive)
// Random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));        // Random integer between 1 and 10
```

### Date Methods

```javascript
// Creating dates
const now = new Date();                // Current date and time
const date1 = new Date('2023-05-15');  // From date string
const date2 = new Date(2023, 4, 15);   // Year, month (0-11), day

// Getting components
console.log(now.getFullYear());        // e.g., 2023
console.log(now.getMonth());           // 0-11 (Jan = 0, Dec = 11)
console.log(now.getDate());            // 1-31 (day of month)
console.log(now.getDay());             // 0-6 (Sun = 0, Sat = 6)
console.log(now.getHours());           // 0-23
console.log(now.getMinutes());         // 0-59
console.log(now.getSeconds());         // 0-59
console.log(now.getTime());            // Milliseconds since Jan 1, 1970

// Setting components
const birthday = new Date();
birthday.setFullYear(1990);
birthday.setMonth(0);  // January
birthday.setDate(15);

// Formatting dates
console.log(now.toDateString());       // e.g., "Mon Mar 06 2025"
console.log(now.toTimeString());       // e.g., "12:34:56 GMT+0530"
console.log(now.toLocaleDateString()); // e.g., "3/6/2025" (locale-specific)
console.log(now.toISOString());        // e.g., "2025-03-06T07:04:56.789Z"

// Date calculations
const date3 = new Date();
date3.setDate(date3.getDate() + 7);    // Add 7 days
console.log(date3);

// Time difference in milliseconds
const diff = date3.getTime() - now.getTime();
console.log(diff / (1000 * 60 * 60 * 24)); // Difference in days
```

## Advanced Concepts

### Callback Functions

```javascript
// A callback is a function passed as an argument to another function
function fetchData(callback) {
  // Simulate async operation with setTimeout
  setTimeout(() => {
    // After 1 second, prepare data and call the callback
    const data = { id: 1, name: "Product" };
    callback(data);  // Execute the callback with the result
  }, 1000);
}

### Callback Functions (continued)

```javascript
// Passing a function as a callback
fetchData(function(data) {
  // This function executes when fetchData completes
  console.log("Data received:", data);  // "Data received: {id: 1, name: "Product"}"
});

// Callback hell (nested callbacks)
fetchUser(function(user) {
  fetchUserPosts(user.id, function(posts) {
    fetchPostComments(posts[0].id, function(comments) {
      // Deeply nested callbacks become hard to manage
      console.log(comments);
    });
  });
});
```

### Promises

```javascript
// Promises represent a future value, often used for async operations
const fetchUser = new Promise((resolve, reject) => {
  // Promise constructor takes a function with resolve and reject parameters
  setTimeout(() => {
    const success = true;  // Simulate successful operation
    
    if (success) {
      // Operation succeeded
      const user = { id: 1, name: "John" };
      resolve(user);  // Fulfill the promise with a value
    } else {
      // Operation failed
      reject("Error fetching user");  // Reject the promise with a reason
    }
  }, 1000);
});

// Consuming promises
fetchUser
  .then(user => {
    // Called when promise is fulfilled
    console.log("User:", user);
    return fetchPosts(user.id);  // Return another promise for chaining
  })
  .then(posts => {
    // Called when the previous promise is fulfilled
    console.log("Posts:", posts);
  })
  .catch(error => {
    // Called if any promise in the chain is rejected
    console.log("Error:", error);
  })
  .finally(() => {
    // Always called, regardless of success or failure
    console.log("Operation complete");
  });

// Promise methods
const promise1 = Promise.resolve(42);  // Create fulfilled promise
const promise2 = Promise.reject("Error");  // Create rejected promise

// Promise.all - waits for all promises to resolve, or rejects if any reject
Promise.all([fetchUser, fetchPosts])
  .then(([user, posts]) => {
    // Both results are available here
    console.log(user, posts);
  });

// Promise.race - resolves/rejects as soon as any promise resolves/rejects
Promise.race([fetchUser, fetchPosts])
  .then(firstResult => {
    // Contains result of the fastest promise
    console.log("First to complete:", firstResult);
  });

// Promise.allSettled - waits for all promises regardless of rejection
Promise.allSettled([fetchUser, promise2])
  .then(results => {
    // Array of objects with status ("fulfilled" or "rejected") and value/reason
    results.forEach(result => {
      if (result.status === "fulfilled") {
        console.log("Success:", result.value);
      } else {
        console.log("Failed:", result.reason);
      }
    });
  });
```

### Async/Await

```javascript
// Async/await is syntactic sugar over promises (ES2017)
// An async function always returns a promise
async function getUserData() {
  try {
    // await pauses execution until the promise resolves
    const response = await fetch('https://api.example.com/users');
    
    // This line only executes after the fetch completes
    const data = await response.json();
    
    return data;  // Automatically wrapped in a promise
  } catch (error) {
    // Catches any errors in the try block
    console.log("Error:", error);
    throw error;  // Re-throw or handle as needed
  }
}

// Using the async function
getUserData()
  .then(data => console.log(data))
  .catch(error => console.log("Caught:", error));

// Async with Promise.all
async function getMultipleData() {
  try {
    // Run multiple promises in parallel and wait for all
    const [users, posts, comments] = await Promise.all([
      fetch('https://api.example.com/users').then(res => res.json()),
      fetch('https://api.example.com/posts').then(res => res.json()),
      fetch('https://api.example.com/comments').then(res => res.json())
    ]);
    
    return { users, posts, comments };
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
```

## Event Loop and Asynchronous JavaScript

```javascript
// JavaScript is single-threaded but handles async operations via the event loop

// Synchronous code (executes immediately)
console.log("Start");  // Executes first

// setTimeout (schedules callback for later execution)
setTimeout(() => {
  // This callback is placed in the task queue
  console.log("Timeout callback");  // Executes fourth
}, 0);

// Promise (microtasks have higher priority than regular tasks)
Promise.resolve().then(() => {
  // This callback is placed in the microtask queue
  console.log("Promise callback");  // Executes third
});

// More synchronous code
console.log("End");  // Executes second

// Output order:
// 1. "Start"
// 2. "End"
// 3. "Promise callback"
// 4. "Timeout callback"

// Explanation:
// 1. Synchronous code runs first (console.log("Start"))
// 2. setTimeout callback is scheduled (added to task queue)
// 3. Promise callback is scheduled (added to microtask queue)
// 4. More synchronous code runs (console.log("End"))
// 5. Call stack is empty, event loop checks microtask queue first
// 6. Promise callback runs (console.log("Promise callback"))
// 7. Microtask queue is empty, event loop checks task queue
// 8. setTimeout callback runs (console.log("Timeout callback"))
```

## DOM Manipulation

```javascript
// Selecting elements
const element = document.getElementById('myElement');  // Select by ID
const buttons = document.getElementsByClassName('btn');  // Collection by class
const paragraphs = document.getElementsByTagName('p');  // Collection by tag
const container = document.querySelector('.container');  // First matching CSS selector
const items = document.querySelectorAll('li.item');  // All matching CSS selector

// Creating elements
const newDiv = document.createElement('div');  // Create a new element
newDiv.id = 'newContent';  // Set ID
newDiv.className = 'content-box';  // Set class
newDiv.textContent = 'New content';  // Set text

// Modifying elements
element.innerHTML = '<span>Updated</span>';  // Set HTML content (security risk with user input)
element.textContent = 'Just text';  // Set text content (safer)

// Attributes
element.setAttribute('data-id', '123');  // Set attribute
console.log(element.getAttribute('data-id'));  // Get attribute
element.removeAttribute('title');  // Remove attribute
console.log(element.hasAttribute('hidden'));  // Check attribute

// CSS manipulation
element.style.color = 'blue';  // Set inline CSS property
element.style.backgroundColor = 'lightgray';  // camelCase for hyphenated properties
element.classList.add('active');  // Add class
element.classList.remove('hidden');  // Remove class
element.classList.toggle('selected');  // Toggle class
console.log(element.classList.contains('active'));  // Check class

// DOM traversal
console.log(element.parentNode);  // Parent node
console.log(element.children);  // Child elements
console.log(element.firstElementChild);  // First child element
console.log(element.lastElementChild);  // Last child element
console.log(element.nextElementSibling);  // Next sibling element
console.log(element.previousElementSibling);  // Previous sibling element

// DOM manipulation
container.appendChild(newDiv);  // Add as last child
container.insertBefore(newDiv, container.firstChild);  // Insert at specific position
container.removeChild(container.lastChild);  // Remove child
element.remove();  // Remove element (newer method)

// Cloning nodes
const clone = element.cloneNode(true);  // Deep clone (with all children)
container.appendChild(clone);  // Add the clone to the DOM
```

## Local Storage and Session Storage

```javascript
// localStorage - persists even after browser is closed
// Store data
localStorage.setItem('username', 'john_doe');  // Store string
localStorage.setItem('isLoggedIn', 'true');  // All values stored as strings
localStorage.setItem('user', JSON.stringify({id: 1, name: 'John'}));  // Store object

// Retrieve data
const username = localStorage.getItem('username');  // "john_doe"
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';  // Convert string to boolean
const user = JSON.parse(localStorage.getItem('user'));  // Parse object

// Remove specific item
localStorage.removeItem('isLoggedIn');

// Clear all localStorage
localStorage.clear();

// sessionStorage - similar API but clears when tab/window closes
sessionStorage.setItem('tempData', 'This will be lost when session ends');
const tempData = sessionStorage.getItem('tempData');
```

## Modules (ES6)

```javascript
// In file: math.js
// Exporting individual values
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}

// Default export (only one per module)
export default function multiply(a, b) {
  return a * b;
}

// Named export of multiple items
const subtract = (a, b) => a - b;
const square = x => x * x;
export { subtract, square };

// In another file: main.js
// Import default export
import multiply from './math.js';

// Import named exports
import { PI, add } from './math.js';

// Import with alias
import { subtract as sub, square } from './math.js';

// Import all as namespace
import * as math from './math.js';
console.log(math.PI);  // 3.14159
console.log(math.add(2, 3));  // 5
```

## Classes (ES6)

```javascript
// Class declaration
class Person {
  // Class constructor
  constructor(name, age) {
    // Instance properties
    this.name = name;
    this.age = age;
  }
  
  // Instance method
  greet() {
    return `Hello, my name is ${this.name}`;
  }
  
  // Getter method
  get birthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
  
  // Setter method
  set birthYear(year) {
    const currentYear = new Date().getFullYear();
    this.age = currentYear - year;
  }
  
  // Static method (called on the class, not instances)
  static fromBirthYear(name, year) {
    const age = new Date().getFullYear() - year;
    return new Person(name, age);
  }
}

// Creating instances
const john = new Person('John', 30);
console.log(john.greet());  // "Hello, my name is John"
console.log(john.birthYear);  // e.g., 1993

// Using static method
const jane = Person.fromBirthYear('Jane', 1995);
console.log(jane.age);  // e.g., 28

// Inheritance
class Employee extends Person {
  constructor(name, age, position) {
    // Call parent constructor
    super(name, age);
    this.position = position;
  }
  
  // Override parent method
  greet() {
    return `${super.greet()}. I work as a ${this.position}`;
  }
}

const bob = new Employee('Bob', 35, 'Developer');
console.log(bob.greet());  // "Hello, my name is Bob. I work as a Developer"
```

## Regular Expressions

```javascript
// Creating regular expressions
const pattern1 = /hello/i;  // Literal notation with 'i' flag for case-insensitive
const pattern2 = new RegExp('hello', 'i');  // Constructor notation

// Flags
// g - global (find all matches)
// i - case-insensitive
// m - multiline
// s - dot matches newlines
// u - unicode
// y - sticky

// Testing for matches
const text = "Hello, world!";
console.log(pattern1.test(text));  // true (tests if pattern exists)

// Finding matches
const result = pattern1.exec(text);  // Returns match information or null
console.log(result[0]);  // "Hello"
console.log(result.index);  // 0 (position of match)

// String methods for regex
console.log(text.match(/o/g));  // ["o", "o"] (all matches with g flag)
console.log(text.search(/world/));  // 7 (index of match, or -1)
console.log(text.replace(/o/g, 'x'));  // "Hellx, wxrld!" (replace matches)
console.log(text.split(/,\s*/));  // ["Hello", "world!"] (split at matches)

// Common patterns
const emailPattern = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;
console.log(emailPattern.test("user@example.com"));  // true

const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
console.log(phonePattern.test("123-456-7890"));  // true

// Capturing groups
const datePattern = /(\d{2})\/(\d{2})\/(\d{4})/;
const dateString = "25/12/2023";
const dateMatch = dateString.match(datePattern);
console.log(dateMatch[1]);  // "25" (day)
console.log(dateMatch[2]);  // "12" (month)
console.log(dateMatch[3]);  // "2023" (year)

// Named capturing groups (ES2018)
const betterDatePattern = /(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{4})/;
const betterDateMatch = dateString.match(betterDatePattern).groups;
console.log(betterDateMatch.day);    // "25"
console.log(betterDateMatch.month);  // "12"
console.log(betterDateMatch.year);   // "2023"
```

## JSON Handling

```javascript
// Object to JSON string
const user = {
  name: "John",
  age: 30,
  isAdmin: false,
  skills: ["JavaScript", "HTML", "CSS"],
  address: {
    city: "New York",
    zip: "10001"
  }
};

const jsonString = JSON.stringify(user);  // Convert to JSON string
console.log(jsonString);
// {"name":"John","age":30,"isAdmin":false,"skills":["JavaScript","HTML","CSS"],"address":{"city":"New York","zip":"10001"}}

// Pretty printing with indentation
console.log(JSON.stringify(user, null, 2));  // Indented with 2 spaces

// Custom replacer function
const jsonWithoutPrivate = JSON.stringify(user, (key, value) => {
  // Skip properties that start with underscore
  if (key.startsWith('_')) return undefined;
  return value;
});

// JSON string to object
const parsedUser = JSON.parse(jsonString);  // Parse JSON string to object
console.log(parsedUser.name);  // "John"
console.log(parsedUser.address.city);  // "New York"

// Custom reviver function
const dateString = '{"name":"Meeting","date":"2023-05-15T10:00:00.000Z"}';
const parsedWithDate = JSON.parse(dateString, (key, value) => {
  // Convert date strings to Date objects
  if (key === 'date') return new Date(value);
  return value;
});
console.log(parsedWithDate.date instanceof Date);  // true
```

## Debugging Techniques

```javascript
// Console methods
console.log("Basic logging");  // Basic output
console.info("Information");   // Info level (often same as log)
console.warn("Warning");       // Warning (yellow in browser console)
console.error("Error");        // Error (red in browser console)

// Formatted output
console.log("User: %s, Age: %d", "John", 30);  // String substitution

// Tabular data
console.table([
  { name: "John", age: 30 },
  { name: "Jane", age: 25 }
]);

// Grouping console output
console.group("User Details");
console.log("Name: John");
console.log("Age: 30");
console.groupEnd();

// Timing operations
console.time("Array initialization");
const arr = new Array(10000);
for (let i = 0; i < arr.length; i++) {
  arr[i] = i;
}
console.timeEnd("Array initialization");  // Shows elapsed time

// Stack trace
console.trace("Trace message");  // Outputs stack trace

// Debugger statement
function buggyFunction(x) {
  debugger;  // Browser will pause execution here if dev tools are open
  return x * 2;
}
```

## Best Practices

```javascript
// Use strict mode to catch common errors
"use strict";

// Avoid global variables
function badExample() {
  badVariable = "This creates a global variable";  // Bad (without let/const/var)
}

// Use const by default, let when needed
const PI = 3.14159;            // Value won't change
let counter = 0;               // Value will change
// var oldWay = "avoid using"; // Older, has function scope

// Use meaningful names
// Bad
const x = 86400000;
// Good
const MILLISECONDS_IN_DAY = 86400000;

// Use === and !== instead of == and !=
// == performs type coercion
console.log(5 == "5");     // true (coerces string to number)
console.log(5 === "5");    // false (different types)
console.log(null == undefined);  // true
console.log(null === undefined); // false

// Handle errors properly
try {
  // Risky code
  throw new Error("Something went wrong");
} catch (error) {
  // Handle the error gracefully
  console.error("Error caught:", error.message);
} finally {
  // Clean up resources
  console.log("Cleanup");
}

// Use template literals for complex strings
const name = "John";
const greeting = `Hello, ${name}! Today is ${new Date().toLocaleDateString()}.`;

// Use arrow functions for callbacks and short functions
[1, 2, 3].map(x => x * 2);  // [2, 4, 6]

// Use object destructuring for cleaner code
function processUser({name, age, email}) {
  console.log(`User ${name} is ${age} years old and uses ${email}`);
}

// Use property shorthand
const firstName = "John";
const lastName = "Doe";
// Instead of {firstName: firstName, lastName: lastName}
const person = {firstName, lastName};

// Use spread operator for shallow copies
const original = [1, 2, 3];
const copy = [...original];  // Array copy
const extended = {...person, age: 30};  // Object copy with additional property

// Use optional chaining for safer property access
const response = {
  data: {
    user: null
  }
};
// Instead of: response && response.data && response.data.user && response.data.user.name
const userName = response?.data?.user?.name;  // undefined (no error)

// Use nullish coalescing for default values
// ?? returns right-side value only if left side is null or undefined
const count = data?.count ?? 0;  // 0 if data.count is null/undefined, but uses data.count if it's 0
```
