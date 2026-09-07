# Day 1 — React Interview Preparation

This file is for interview-ready preparation. Each topic has a definition, explanation, example and a ready-to-speak answer.

## 1. React
**Definition:** React is a JavaScript library for building user interfaces using reusable components.

**Explanation:** React breaks a large UI into smaller reusable components.

**Example:**
```jsx
function Button() {
  return <button>Submit</button>;
}
```

**Ready-to-speak answer:**
“React is a JavaScript library used to build user interfaces using reusable components. It helps us divide a large UI into smaller components that can be reused.”

---

## 2. Why React?
**Definition:** React makes UI development easier through reusable components and UI updates when data changes.

**Example:** A website can have separate Navbar, Button, ProductCard and Footer components.

**Ready-to-speak answer:**
“We use React because it helps us create reusable components, organize UI better, and update the UI when data changes.”

---

## 3. React vs HTML/CSS/JavaScript
**Explanation:** HTML handles structure, CSS handles styling, JavaScript handles logic and behaviour, while React helps build component-based UI.

**Ready-to-speak answer:**
“HTML provides structure, CSS provides styling, JavaScript handles logic and behaviour, and React helps us build UI using reusable components.”

---

## 4. Vite
**Definition:** Vite is a frontend build tool used to create, develop and build modern web applications quickly.

**Important:** Vite is not React.

**Ready-to-speak answer:**
“Vite is a frontend build and development tool. It helps us create and run React projects quickly.”

---

## 5. JSX
**Definition:** JSX is a syntax extension for JavaScript that allows HTML-like markup inside JavaScript.

**Example:**
```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

**Ready-to-speak answer:**
“JSX is a syntax extension for JavaScript. It allows us to write HTML-like markup inside JavaScript, which makes React UI code easier to write and understand.”

---

## 6. JSX Rules
**Rules:**
- One JSX root/tree must be returned.
- Use `className` instead of `class`.
- Use self-closing tags such as `<input />`.

**Example:**
```jsx
return (
  <div className="box">
    <h1>Hello</h1>
    <input />
  </div>
);
```

---

## 7. JavaScript inside JSX
**Definition:** JavaScript expressions can be written inside JSX using `{}`.

**Example:**
```jsx
const name = 'Adil';
return <h1>Hello {name}</h1>;
```

**Ready-to-speak answer:**
“We use curly braces in JSX to write JavaScript expressions such as variables, calculations and ternary expressions.”

---

## 8. Component
**Definition:** A component is a reusable piece of UI that can contain markup, logic and behaviour.

**Example:** Button, Navbar and ProductCard.

**Ready-to-speak answer:**
“A component is a reusable UI block. We can define it once and use it multiple times.”

---

## 9. Functional Component
**Definition:** A functional component is a React component defined as a JavaScript function that returns JSX.

**Example:**
```jsx
function Welcome() {
  return <h1>Welcome</h1>;
}
```

**Interview point:** Custom component names start with a capital letter.

---

## 10. Class Component
**Definition:** A class component uses a JavaScript class that extends `React.Component` and uses `render()` to return JSX.

**Example:**
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Welcome</h1>;
  }
}
```

**Interview point:** Modern React commonly uses function components and Hooks; class components are mainly important for older/legacy code.

---

## 11. Reusable Component
**Explanation:** Create the component once and render it wherever needed.

```jsx
function Button() {
  return <button>Submit</button>;
}

function App() {
  return <><Button /><Button /><Button /></>;
}
```

---

## 12. Import / Export
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

**Default export/import:**
```jsx
export default Button;
import Button from './Button.jsx';
```

**Interview point:** Named imports use `{}`; default imports do not.

---

## 13. Fragment
**Definition:** A Fragment groups multiple JSX elements without adding an extra DOM element.

**Example:**
```jsx
return (
  <>
    <h1>Hello</h1>
    <p>React is awesome</p>
  </>
);
```

---

## 14. Bootstrap
**Definition:** Bootstrap is a CSS framework that provides ready-made CSS classes and UI components for building responsive websites quickly.

**Example:**
```jsx
import 'bootstrap/dist/css/bootstrap.min.css';

<button className="btn btn-primary">Submit</button>
```

**Interview point:** Bootstrap reduces the amount of custom CSS needed for common UI styling.

---

## Interview Practice Rule
For each question, first answer in 2–3 sentences. Then give a small code example if the interviewer asks for one. Do not memorize long paragraphs; understand the concept and explain it naturally.
