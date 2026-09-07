# Day 1 — React Foundation Topics

This file records the topics completed during my Day 1 React learning.

## 1. Why React?
**Definition:** React makes UI development easier by using reusable components and updating the UI when data changes.

**Hindi:** React UI ko chhote reusable components mein divide karta hai, jisse development aur maintenance easy hoti hai.

**Example:** Navbar, Button, ProductCard, LoginForm and Footer can be separate reusable components.

---

## 2. React vs HTML / CSS / JavaScript
| Technology | Purpose | Example |
|---|---|---|
| HTML | Structure | `<h1>Hello</h1>` |
| CSS | Style | `.box { padding: 10px; }` |
| JavaScript | Logic / behaviour | `button.addEventListener(...)` |
| React | Component-based UI | `<Button />` |

**Explanation:** HTML gives structure, CSS gives styling, JavaScript handles logic/behaviour, and React helps organize UI into components.

---

## 3. React Setup + Vite
**Vite definition:** Vite is a frontend build tool used to create, develop and build modern web applications quickly.

**Hindi:** Vite React project ko quickly create, run aur build karne mein help karta hai. Vite React nahi hai.

**Commands:**
```bash
node --version
npm --version
npm create vite@latest
# Select React → JavaScript
cd react-day1
npm install
npm run dev
```

**Remember:** Node.js = runtime/tooling, npm = package manager, Vite = build/development tool.

---

## 4. Project Structure
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

**Explanation:** `App.jsx` is the main application component. `main.jsx` is the entry point. `index.html` contains the root element. `index.css` contains global styles. `package.json` contains project metadata, scripts and dependencies.

---

## 5. main.jsx
**Purpose:** Connects React to the HTML page and renders the `<App />` component.

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

---

## 6. index.html
**Purpose:** Main HTML file where the React application is mounted.

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```

**Flow:** `index.html → root div → main.jsx → App.jsx → React UI`

---

## 7. JSX
**English:** JSX is a syntax extension for JavaScript that allows us to write HTML-like markup inside JavaScript.

**Hindi:** JSX JavaScript ka syntax extension hai jisme hum JavaScript ke andar HTML jaisa markup likh sakte hain.

**Example:**
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

---

## 8. JSX Rules
### Rule 1 — One Parent Element
A component must return one JSX root/tree. That root can contain multiple elements.

### Rule 2 — className
HTML uses `class`; JSX uses `className`.

```jsx
<div className="box"></div>
```

### Rule 3 — Self-closing Tags
```jsx
<input />
<br />
<hr />
```

---

## 9. JavaScript Inside JSX
**English:** JavaScript expressions can be written inside JSX using curly braces `{}`.

**Hindi:** JSX ke andar JavaScript expressions likhne ke liye `{ }` use karte hain.

**Example:**
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

Variables, calculations, function calls and ternary expressions can be used inside `{}`. Statements such as `if` and `for` are not written directly inside JSX braces.

---

## 10. Components
**English:** A component is a reusable piece of UI that can contain markup, logic and behaviour.

**Hindi:** Component UI ka ek reusable block hota hai jisme markup aur logic ho sakta hai. Ek baar define karke multiple times use kar sakte hain.

**Examples:** Button, Navbar, ProductCard, LoginForm, Footer.

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

---

## 11. Functional Component
**English:** A functional component is a React component defined as a JavaScript function that returns JSX.

**Hindi:** Function component ek JavaScript function hota hai jo JSX return karta hai.

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}

function App() {
  return (
    <>
      <Welcome />
      <Welcome />
    </>
  );
}
```

**Rule:** Custom component names start with a capital letter: `Welcome` is correct; `welcome` is not treated as a custom React component.

---

## 12. Class Component
A class component is a React component created using a JavaScript class that extends `React.Component` and uses `render()` to return JSX.

```jsx
import React from 'react';

class ClassExample extends React.Component {
  render() {
    return <h1>Class Component</h1>;
  }
}
```

**Important:** Modern React generally uses function components and Hooks. Class components are mainly important for understanding older/legacy React code.

---

## 13. Reusable Components
A reusable component is created once and used multiple times.

```jsx
function Button() {
  return <button>Submit</button>;
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

---

## 14. Import / Export
**Named export:**
```jsx
export function Button() {
  return <button>Submit</button>;
}
```

**Named import:**
```jsx
import { Button } from './Button.jsx';
```

**Default export:**
```jsx
export default Button;
```

**Default import:**
```jsx
import Button from './Button.jsx';
```

**Remember:** Named imports use `{}`. Default imports do not.

---

## 15. Fragment
**English:** A Fragment groups multiple JSX elements without adding an extra DOM element.

**Hindi:** Fragment multiple JSX elements ko group karta hai bina extra div/DOM element add kiye.

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

---

## 16. Bootstrap Basics
**English:** Bootstrap is a CSS framework that provides ready-made CSS classes and UI components for building responsive websites quickly.

**Hindi:** Bootstrap ek CSS framework hai jo ready-made CSS classes aur UI components provide karta hai, jisse responsive UI quickly banayi ja sakti hai.

**Install:**
```bash
npm install bootstrap
```

**Import:**
```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

**Example:**
```jsx
<button className="btn btn-primary">Submit</button>
```

## Day 1 Completion
- Function Component — completed
- JSX — completed
- Dynamic name using `{name}` — completed
- Reusable Button used 3 times — completed
- Bootstrap `btn btn-primary` — completed
- Class component — practiced
- Student Profile own project — practiced

**Local practice URL:** http://localhost:5175/
