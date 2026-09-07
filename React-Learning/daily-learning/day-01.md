# Day 1 — React Foundation

## Status
**Completed ✓**

## Course Section
React Foundation + Basic Components

## Topics Completed
1. What is React
2. Why React
3. React vs HTML / CSS / JavaScript
4. React Setup + Vite
5. Project Structure
6. `main.jsx`
7. `index.html`
8. JSX
9. JSX Rules
10. JavaScript Inside JSX
11. Components
12. Functional Components
13. Class Components
14. Reusable Components
15. Import / Export
16. Fragment
17. Bootstrap Basics

---

## 1. What is React?

### English Definition
React is a JavaScript library for building user interfaces using reusable components.

### Hindi Definition
React ek JavaScript library hai jo reusable aur interactive user interfaces banane ke liye use hoti hai.

### Simple Explanation
A large website can be divided into small UI pieces such as Navbar, Button, ProductCard and Footer. React lets me create these pieces as components and reuse them.

### Example
```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

### Important Points
- React is a JavaScript library.
- React is mainly used for UI development.
- React uses reusable components.

### Question
**Q: What is React?**

**Answer:** React is a JavaScript library used to build user interfaces using reusable components.

### Interview Question
**Q: What is React and why is it used?**

**Interview-ready answer:** React is a JavaScript library for building user interfaces. It helps developers create reusable components and manage UI updates efficiently.

---

## 2. Why React?

### English Definition
React makes UI development easier by using reusable components and updating the UI when data changes.

### Hindi Definition
React UI ko chhote reusable components mein divide karta hai, jisse development aur maintenance easy hoti hai.

### Simple Explanation
Instead of writing one huge UI, I can split it into smaller components and reuse them wherever needed.

### Example
```text
Navbar
Button
ProductCard
LoginForm
Footer
```

Each can be a separate reusable component.

### Question
**Q: Why do we use React?**

**Answer:** React helps build maintainable UIs with reusable components and efficient UI updates.

### Interview Question
**Q: What are the main benefits of React?**

**Interview-ready answer:** The main benefits are reusable components, component-based development, easier UI maintenance and efficient updates when application data changes.

---

## 3. React vs HTML / CSS / JavaScript

### Definition
These technologies have different roles in frontend development.

| Technology | Purpose | Example |
|---|---|---|
| HTML | Structure | `<h1>Hello</h1>` |
| CSS | Styling | `.box { padding: 10px; }` |
| JavaScript | Logic / behaviour | `button.addEventListener(...)` |
| React | Component-based UI | `<Button />` |

### Hindi Explanation
HTML structure banata hai, CSS design karta hai, JavaScript behaviour/logic handle karta hai, aur React component-based UI banane mein help karta hai.

### Question
**Q: Is React a replacement for HTML, CSS and JavaScript?**

**Answer:** No. React is built with JavaScript and is used mainly to create and manage UI. HTML and CSS concepts are still required.

---

## 4. React Setup + Vite

### English Definition
Vite is a frontend build tool used to create, develop and build modern web applications quickly.

### Hindi Definition
Vite React project ko quickly create, run aur build karne mein help karta hai. Vite React nahi hai.

### Setup
```bash
node --version
npm --version
npm create vite@latest
cd react-day1
npm install
npm run dev
```

### Important Points
- Node.js provides the runtime/tooling needed for npm-based development.
- npm is the package manager.
- Vite is the development/build tool.
- React is the UI library.

### Question
**Q: Is Vite React?**

**Answer:** No. React is the UI library and Vite is the frontend development/build tool.

---

## 5. Project Structure

### Example
```text
react-day1/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

### Explanation
- `App.jsx` → main application component.
- `main.jsx` → entry point that renders React into the HTML root.
- `index.html` → main HTML file containing the root element.
- `index.css` → global styles.
- `package.json` → project metadata, scripts and dependencies.
- `vite.config.js` → Vite configuration.

### Question
**Q: What is the purpose of `package.json`?**

**Answer:** It stores project metadata, scripts and dependencies.

---

## 6. main.jsx

### Definition
`main.jsx` connects React to the HTML page and renders the application into the root element.

### Example
```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### Simple Explanation
`main.jsx` is the bridge between the HTML root and my React `App` component.

### Question
**Q: What is the purpose of `main.jsx`?**

**Answer:** It connects React to the HTML root element and renders the `App` component.

---

## 7. index.html

### Definition
`index.html` is the main HTML file where the React application is mounted.

### Example
```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```

### Flow
```text
index.html → root div → main.jsx → App.jsx → React UI
```

### Question
**Q: Where is the React application mounted?**

**Answer:** React is mounted into the HTML element with `id="root"`.

---

## 8. JSX

### English Definition
JSX is a syntax extension for JavaScript that allows HTML-like markup inside JavaScript.

### Hindi Definition
JSX JavaScript ka syntax extension hai jisme hum JavaScript ke andar HTML jaisa markup likh sakte hain.

### Example
```jsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Learning React</p>
    </>
  );
}
```

### Question
**Q: What is JSX?**

**Answer:** JSX is a syntax extension for JavaScript that allows HTML-like markup to be written inside JavaScript.

### Interview Question
**Q: Is JSX HTML?**

**Interview-ready answer:** JSX looks like HTML, but it is a syntax extension for JavaScript used to describe React UI.

---

## 9. JSX Rules

### Rule 1 — One Root Element
A component must return one JSX root/tree. Multiple elements can exist inside that root.

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>React</p>
  </div>
);
```

### Rule 2 — className
HTML uses `class`; JSX uses `className`.

```jsx
<div className="box">Hello</div>
```

### Rule 3 — Self-closing Tags
```jsx
<input />
<br />
<hr />
```

### Questions
**Q: What is the difference between `class` and `className`?**

**Answer:** HTML uses `class`, while JSX uses `className`.

**Q: Give examples of self-closing JSX tags.**

**Answer:** `<input />`, `<br />` and `<hr />`.

---

## 10. JavaScript Inside JSX

### English Definition
JavaScript expressions can be written inside JSX using curly braces `{}`.

### Hindi Definition
JSX ke andar JavaScript expressions likhne ke liye `{}` use karte hain.

### Example
```jsx
const name = 'Adil';
const age = 21;

function App() {
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Age: {age}</p>
      <p>2 + 3 = {2 + 3}</p>
    </div>
  );
}
```

### Important Points
Expressions such as variables, calculations, function calls and ternary expressions can be used inside `{}`. Statements such as `if` and `for` are not written directly inside JSX braces.

### Question
**Q: How do you write JavaScript inside JSX?**

**Answer:** JavaScript expressions are written inside curly braces `{}`.

---

## 11. Components

### English Definition
A component is a reusable piece of UI that can contain markup, logic and behaviour.

### Hindi Definition
Component UI ka ek reusable block hota hai jisme markup aur logic ho sakta hai. Ek baar define karke multiple times use kar sakte hain.

### Example
```jsx
function Button() {
  return <button>Submit</button>;
}

function App() {
  return (
    <>
      <Button />
      <Button />
    </>
  );
}
```

### Interview Question
**Q: What is a component in React?**

**Interview-ready answer:** A component is a reusable UI block that can contain markup, logic and behaviour.

---

## 12. Functional Component

### English Definition
A functional component is a React component defined as a JavaScript function that returns JSX.

### Hindi Definition
Function component ek JavaScript function hota hai jo JSX return karta hai.

### Example
```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}
```

### Important Rule
Custom component names start with a capital letter, such as `Welcome`, not `welcome`.

### Question
**Q: What is a functional component?**

**Answer:** It is a React component defined as a JavaScript function that returns JSX.

---

## 13. Class Component

### Definition
A class component is created using a JavaScript class that extends `React.Component` and uses `render()` to return JSX.

### Example
```jsx
import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Welcome</h1>;
  }
}
```

### Important Point
Modern React development generally prefers function components with Hooks. Class components are mainly encountered in older/legacy React code.

### Interview Question
**Q: What is a class component?**

**Answer:** A class component is a JavaScript class that extends `React.Component` and uses `render()` to return JSX.

---

## 14. Reusable Components

### Definition
A reusable component is created once and used multiple times in the application.

### Example
```jsx
function Button() {
  return <button className="btn btn-primary">Submit</button>;
}

function App() {
  return (
    <>
      <Button />
      <Button />
      <Button />
    </>
  );
}
```

### Why useful?
- Less repeated code.
- Easier maintenance.
- Same UI can be reused in multiple places.

### Interview Question
**Q: Why are reusable components important?**

**Answer:** They reduce duplication and make UI code easier to maintain and reuse.

---

## 15. Import / Export

### Named Export
```jsx
export function Button() {
  return <button>Submit</button>;
}
```

```jsx
import { Button } from './Button.jsx';
```

### Default Export
```jsx
export default Button;
```

```jsx
import Button from './Button.jsx';
```

### Question
**Q: Difference between named and default export?**

**Answer:** Named exports are imported with `{}`, while a default export is imported without `{}`.

---

## 16. Fragment

### English Definition
A Fragment groups multiple JSX elements without adding an extra DOM element.

### Hindi Definition
Fragment multiple JSX elements ko group karta hai bina extra div/DOM element add kiye.

### Example
```jsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>React is awesome</p>
      <button>Click Me</button>
    </>
  );
}
```

### Question
**Q: Why do we use Fragment?**

**Answer:** To group multiple JSX elements without adding an unnecessary DOM wrapper.

---

## 17. Bootstrap Basics

### English Definition
Bootstrap is a CSS framework that provides ready-made CSS classes and UI components for building responsive websites quickly.

### Hindi Definition
Bootstrap ek CSS framework hai jo ready-made CSS classes aur UI components provide karta hai, jisse responsive UI quickly banayi ja sakti hai.

### Install
```bash
npm install bootstrap
```

### Import
```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

### Example
```jsx
function Button() {
  return (
    <button className="btn btn-primary">
      Submit
    </button>
  );
}
```

### Interview Question
**Q: What is Bootstrap?**

**Answer:** Bootstrap is a CSS framework that provides ready-made classes and UI components to build responsive interfaces quickly.

---

# Practice Completed

### 1. Function Component
```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

### 2. Dynamic Name
```jsx
const name = 'Syed Adil Ali';
<h1>Hello {name}</h1>
```

### 3. Reusable Button
```jsx
function Button() {
  return <button className="btn btn-primary">Submit</button>;
}
```

Used three times:
```jsx
<Button />
<Button />
<Button />
```

### 4. Class Component
Practiced `extends React.Component` and `render()`.

### 5. Own Project — Student Profile Card
A personal practice project using function components, JSX, JavaScript expressions, reusable components, import/export and Bootstrap.

## Local App
`http://localhost:5175/`

# Day 1 Quick Revision

- React → JavaScript library for building UI.
- Vite → frontend development/build tool.
- JSX → HTML-like syntax written inside JavaScript.
- `className` → JSX attribute used instead of HTML `class`.
- Component → reusable UI block.
- Functional Component → function that returns JSX.
- Class Component → class extending `React.Component` with `render()`.
- Fragment → groups elements without an extra DOM element.
- `{}` → JavaScript expressions inside JSX.
- JSX → one root/tree must be returned.
- Bootstrap → CSS framework with ready-made responsive UI classes/components.

# Questions I Can Answer

1. What is React?
2. Why do we use React?
3. Is React a library or framework?
4. What is Vite?
5. What is the difference between React and JavaScript?
6. What is JSX?
7. What are the JSX rules?
8. Why do we use `className`?
9. What are self-closing tags?
10. How do we write JavaScript inside JSX?
11. What is a component?
12. What is a functional component?
13. What is a class component?
14. Why are reusable components useful?
15. What is the difference between named and default export?
16. What is a Fragment?
17. What is Bootstrap?
18. What is the `index.html → root → main.jsx → App.jsx` flow?

# Day 1 Practice Result

**Foundation completed ✓**

# Next Course Topic

React Level 2 → Fragments → Rendering lists using `map()` → Conditional Rendering → Props → CSS Modules.
