# Introduction to JavaScript

## 1. History of JavaScript

### Origins and Evolution
- **Created in 1995** by Brendan Eich at Netscape Communications
- Originally named "LiveScript"
- Renamed to "JavaScript" for marketing purposes
- Standardized as ECMAScript in 1997

### Key Milestones
- 1995: First introduced in Netscape Navigator
- 1996: Adopted by Microsoft as JScript
- 1997: First ECMAScript standard
- 2009: ECMAScript 5 (ES5) with significant improvements
- 2015: ECMAScript 6 (ES6) - Major language upgrade
- Continuous annual updates since 2015

## 2. Why JavaScript Matters

### Roles and Importance
1. **Web Interactivity**
   - Makes websites dynamic and responsive
   - Allows real-time updates without page reload
   - Creates interactive user interfaces

2. **Versatility**
   - Front-end development (browser)
   - Back-end development (Node.js)
   - Mobile app development
   - Desktop application development
   - Game development

3. **Ecosystem**
   - Largest programming language ecosystem
   - Millions of libraries and frameworks
   - Supported by all modern web browsers
   - Used by major tech companies (Google, Facebook, Netflix)

## 3. Data Types in JavaScript

### Primitive Data Types
1. **Number**
   ```javascript
   let age = 25;           // Integer
   let price = 19.99;      // Floating-point
   let temperature = -5;   // Negative numbers
   ```

2. **String**
   ```javascript
   let name = "John Doe";           // Double quotes
   let greeting = 'Hello, world!';  // Single quotes
   let message = `Template literal`; // Template literals
   ```

3. **Boolean**
   ```javascript
   let isStudent = true;
   let hasJob = false;
   ```

4. **Undefined**
   ```javascript
   let uninitializedVariable;  // Automatically undefined
   ```

5. **Null**
   ```javascript
   let emptyValue = null;  // Intentional absence of value
   ```

6. **Symbol** (Advanced)
   ```javascript
   let uniqueKey = Symbol('description');
   ```

### Reference Data Types
1. **Object**
   ```javascript
   let person = {
     name: "Alice",
     age: 30,
     isStudent: false
   };
   ```

2. **Array**
   ```javascript
   let fruits = ["apple", "banana", "orange"];
   let mixedArray = [1, "two", true, {key: "value"}];
   ```

## 4. Variables and Naming Conventions

### Variable Declaration
```javascript
var oldStyleVariable;       // Function-scoped (avoid)
let modernVariable;         // Block-scoped, can be reassigned
const constantVariable = 42; // Cannot be reassigned
```

### Naming Rules
- Start with letter, underscore (_), or dollar sign ($)
- Case-sensitive
- No spaces or special characters
- Use camelCase for variables and functions
- Use PascalCase for classes
- Use UPPER_SNAKE_CASE for constants

### Good vs. Bad Naming
```javascript
// Good Examples
let firstName = "John";
let age = 25;
const MAX_USERS = 100;

// Bad Examples
let 2ndName = "Doe";       // Starts with number
let first-name = "Jane";   // Contains hyphen
let #specialVar = 42;      // Contains special character
```

## 5. Practical Exercise: User Information Tracker

### Instructions
Create a simple script that:
1. Declares variables for user information
2. Logs information to the console
3. Demonstrates different data types

```javascript
// Exercise: Create a User Profile

// Personal Information
const MAXIMUM_AGE = 120;
let firstName = "Alice";
let lastName = "Johnson";
let age = 28;
let isStudent = true;

// Contact Details
let email = "alice.johnson@example.com";
let phoneNumber = null;

// Skills Array
let skills = ["JavaScript", "HTML", "CSS"];

// Log User Information
console.log("Name:", firstName, lastName);
console.log("Age:", age);
console.log("Student Status:", isStudent);
console.log("Email:", email);
console.log("Phone:", phoneNumber || "Not provided");
console.log("Skills:", skills);

// Type Checking
console.log("First Name Type:", typeof firstName);
console.log("Age Type:", typeof age);
console.log("Skills Type:", typeof skills);
```
