## **Day 1: Introduction to HTML5 **  

This lesson will introduce students to HTML5, covering **basic structure, elements, attributes, tables, forms, and semantic HTML**. Students will **build a simple web page** step by step while practicing each concept.  

---

## **1️⃣ Introduction to HTML (Concepts & Basics)**  

### **What is HTML? (10 minutes)**  
**HTML (HyperText Markup Language)** is the standard language for creating web pages. It structures content using elements enclosed in tags.  

📌 **Key Points:**  
✔ HTML is **not a programming language** but a markup language.  
✔ It works alongside **CSS (for styling)** and **JavaScript (for interactivity)**.  

📌 **Example:**  
Here’s a simple **HTML document**:  
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my first web page using HTML.</p>
</body>
</html>
```
This page displays a **heading** and **paragraph** in a browser.  

---

### **Basic Structure of an HTML Document**  
An HTML page consists of:  
- `<!DOCTYPE html>` – Declares the document as HTML5.  
- `<html>` – The root element.  
- `<head>` – Contains metadata (title, links, scripts).  
- `<body>` – Contains visible content.  

📌 **Example:**  
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>HTML Structure</title>
</head>
<body>
    <h1>Basic Page Structure</h1>
    <p>This is a sample HTML page.</p>
</body>
</html>
```
📝 **Activity:**  
✔ Create a blank HTML file (`index.html`).  
✔ Add a title and a heading.  

---

### **HTML Tags, Elements & Attributes **  
📌 **Tags:** Define elements (e.g., `<h1>`, `<p>`, `<a>`).  
📌 **Elements:** Complete structure of a tag (e.g., `<h1>Hello</h1>`).  
📌 **Attributes:** Provide additional information inside an opening tag (e.g., `href`, `src`).  

#### **Text Formatting Tags:**  
```html
<p>This is a <b>bold</b> text and <i>italic</i> text.</p>
<p>This is a <u>underlined</u> text.</p>
<p>This is a <mark>highlighted</mark> text.</p>
```

#### **Links (`<a>` tag)**  
📌 **Example:**  
```html
<a href="https://example.com" target="_blank">Visit Example</a>
```
✔ Opens a link in a new tab.  

📝 **Activity:**  
✔ Create a page with **headings, paragraphs, and links**.  
✔ Add a link to an external site that opens in a new tab.  

---

### **Lists in HTML **  
✔ **Ordered List (`<ol>`) – numbered list**  
✔ **Unordered List (`<ul>`) – bulleted list**  

📌 **Example:**  
```html
<h2>My Favorite Foods</h2>
<ul>
    <li>Pizza</li>
    <li>Burger</li>
    <li>Pasta</li>
</ul>

<h2>Steps to Make Tea</h2>
<ol>
    <li>Boil water</li>
    <li>Add tea leaves</li>
    <li>Let it steep</li>
    <li>Strain and serve</li>
</ol>
```
📝 **Activity:**  
✔ Create a list of favorite movies using `<ul>`.  
✔ Create a numbered **step-by-step guide** using `<ol>`.  

---

## **2️⃣ Creating a Simple Web Page (Hands-on Project) – 1 Hour**  
Students **combine learned elements** to build a **structured HTML page**.  

📌 **Example:**  
```html
<!DOCTYPE html>
<html>
<head>
    <title>About Me</title>
</head>
<body>
    <h1>Welcome to My Web Page</h1>
    <p>My name is Alex, and I love coding.</p>
    <h2>My Hobbies</h2>
    <ul>
        <li>Reading</li>
        <li>Gaming</li>
        <li>Traveling</li>
    </ul>
    <p>Check out my <a href="https://example.com" target="_blank">favorite website</a>.</p>
</body>
</html>
```
📝 **Activity:**  
✔ Build a **personal webpage** with a heading, paragraph, list, and a link.  

---

## **3️⃣ Tables in HTML**  
✔ Used for **organizing data**.  

📌 **Basic Table Structure:**  
```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
    </tr>
    <tr>
        <td>John</td>
        <td>25</td>
        <td>New York</td>
    </tr>
    <tr>
        <td>Lisa</td>
        <td>30</td>
        <td>Los Angeles</td>
    </tr>
</table>
```
📝 **Activity:**  
✔ Create a **table** with student names and scores.  

---

## **4️⃣ Forms & Input Fields **  
✔ Used to **collect user data**.  

📌 **Example:**  
```html
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>

    <label for="message">Message:</label>
    <textarea id="message" name="message"></textarea><br><br>

    <input type="submit" value="Submit">
</form>
```
📝 **Activity:**  
✔ Build a **contact form** with name, email, and message fields.  

---

## **5️⃣ Semantic HTML & Best Practices **  
✔ Improves **SEO & accessibility**.  

📌 **Example:**  
```html
<header>
    <h1>My Blog</h1>
    <nav>
        <a href="home.html">Home</a> |
        <a href="about.html">About</a>
    </nav>
</header>

<section>
    <h2>Latest Posts</h2>
    <article>
        <h3>Understanding Semantic HTML</h3>
        <p>Semantic HTML makes your code more readable.</p>
    </article>
</section>

<footer>
    <p>&copy; 2024 My Blog</p>
</footer>
```
📝 **Activity:**  
✔ **Refactor** a basic page using **semantic elements**.  
