# React & Redux — Full Course Mindmap

This is my complete course roadmap and revision map. I follow the selected React & Redux course in order. Each topic will be studied with **definition, Hindi explanation, simple explanation, syntax/code, example, important points, questions and interview preparation**.

## 1. React Foundation

### What is React?
**Definition:** React is a JavaScript library for building user interfaces using reusable components.

**Hindi:** React ek JavaScript library hai jo reusable aur interactive UI banane ke liye use hoti hai.

**Example:**
```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

**Question:** What is React?
**Interview answer:** React is a JavaScript library used to build user interfaces with reusable components.

### Why React?
**Definition:** React helps build maintainable UIs by dividing them into reusable components and updating the UI when data changes.

**Example:** Navbar, Button, ProductCard and Footer can be separate reusable components.

**Question:** Why use React?
**Answer:** React improves UI development through reusable components and efficient UI updates.

### React vs HTML / CSS / JavaScript
- HTML → structure
- CSS → styling
- JavaScript → logic and behaviour
- React → component-based UI development

**Example:** `<h1>Hello</h1>` is HTML; `.box { padding: 10px; }` is CSS; `button.addEventListener(...)` is JavaScript; `<Button />` is a React component.

## 2. React Setup + Vite

### Vite
**Definition:** Vite is a frontend build tool used to create, develop and build modern web applications quickly.

**Hindi:** Vite React nahi hai; Vite React project ko create, run aur build karne mein help karta hai.

**Commands:**
```bash
node --version
npm --version
npm create vite@latest
cd react-day1
npm install
npm run dev
```

**Question:** Is Vite React?
**Answer:** No. React is the UI library; Vite is the development/build tool.

## 3. Project Structure

Typical Vite React structure:
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

- `App.jsx` → main application component
- `main.jsx` → entry point that renders React into the HTML root
- `index.html` → main HTML page containing the root element
- `index.css` → global styles
- `package.json` → metadata, scripts and dependencies
- `vite.config.js` → Vite configuration

## 4. main.jsx and index.html

**main.jsx definition:** Connects React to the HTML root and renders the application.

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

**Flow:** `index.html → root div → main.jsx → App.jsx → React UI`

## 5. Components

**Definition:** A component is a reusable piece of UI that can contain markup, logic and behaviour.

**Example:**
```jsx
function Button() {
  return <button>Submit</button>;
}

function App() {
  return <Button />;
}
```

**Interview question:** What is a component?
**Answer:** A component is a reusable UI block that can contain markup, logic and behaviour.

## 6. Function and Class Components

### Functional Component
**Definition:** A React component defined as a JavaScript function that returns JSX.

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}
```

### Class Component
**Definition:** A component created using a JavaScript class extending `React.Component` and a `render()` method.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Welcome</h1>;
  }
}
```

**Important:** Modern React generally uses function components and Hooks. Class components are mainly legacy code.

## 7. JSX

**Definition:** JSX is a syntax extension for JavaScript that allows HTML-like markup inside JavaScript.

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

## 8. JSX Rules

### One Root Element
A component returns one JSX root/tree.

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>React</p>
  </div>
);
```

### className
HTML uses `class`; JSX uses `className`.

```jsx
<div className="box">Hello</div>
```

### Self-closing Tags
```jsx
<input />
<br />
<hr />
```

## 9. JavaScript Inside JSX

**Definition:** JavaScript expressions can be written inside JSX using `{}`.

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

Expressions such as variables, calculations, function calls and ternary expressions can be used. Statements such as `if` and `for` are not written directly inside JSX braces.

## 10. Reusable Components

**Definition:** A reusable component is created once and used multiple times.

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

## 11. Import / Export

**Named export:**
```jsx
export function Button() {
  return <button>Submit</button>;
}
```
```jsx
import { Button } from './Button.jsx';
```

**Default export:**
```jsx
export default Button;
```
```jsx
import Button from './Button.jsx';
```

**Question:** Difference between named and default export?
**Answer:** Named exports are imported with `{}`, while a default export is imported without `{}`.

## 12. Fragment

**Definition:** A Fragment groups multiple JSX elements without adding an extra DOM element.

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>React is awesome</p>
  </>
);
```

## 13. Bootstrap

**Definition:** Bootstrap is a CSS framework that provides ready-made CSS classes and UI components for responsive websites.

```bash
npm install bootstrap
```

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

```jsx
<button className="btn btn-primary">Submit</button>
```

## 14. React Level 2 — Lists and Rendering

### Fragments
Use Fragments to group JSX without an extra DOM wrapper.

### `map()`
**Definition:** `map()` is a JavaScript array method that visits array elements and returns a new array. In React it is commonly used to render lists.

```jsx
const skills = ['HTML', 'CSS', 'JavaScript', 'React'];

function Skills() {
  return (
    <>
      {skills.map((skill, index) => (
        <h3 key={index}>{skill}</h3>
      ))}
    </>
  );
}
```

**Important:** List elements need a `key`. Stable unique IDs are preferred for dynamic lists.

### Conditional Rendering
**Definition:** Showing different UI based on a condition.

```jsx
function App() {
  const isLoggedIn = true;
  return <h1>{isLoggedIn ? 'Welcome' : 'Please Login'}</h1>;
}
```

Common forms: `if/else`, ternary `? :`, and `&&`.

### Props
**Definition:** Props are read-only data passed from a parent component to a child component.

```jsx
function Product({ name, price }) {
  return <h3>{name} - ₹{price}</h3>;
}

function App() {
  return <Product name="Laptop" price={50000} />;
}
```

**Question:** What are props?
**Answer:** Props are read-only inputs used to pass data from a parent component to a child component.

### CSS Modules
**Definition:** CSS Modules scope CSS class names locally to a component/module.

```jsx
import styles from './Card.module.css';
<div className={styles.card}>Product</div>
```

## 15. React Level 3 — Children, Events and Functions

### Passing Components as Children
**Definition:** `children` is the content placed between a component's opening and closing tags.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <h2>Profile</h2>
</Card>
```

### Event Handling
**Definition:** React event handling lets components respond to user actions.

```jsx
function App() {
  function handleClick() {
    console.log('Clicked');
  }

  return <button onClick={handleClick}>Click</button>;
}
```

### Passing Functions via Props
```jsx
function Child({ onSave }) {
  return <button onClick={onSave}>Save</button>;
}

function App() {
  function saveData() {
    console.log('Saved');
  }
  return <Child onSave={saveData} />;
}
```

## 16. State Management

### `useState`
**Definition:** `useState` is a Hook used to add and update state in a function component.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

### State vs Props
- State → data managed by the component; can change.
- Props → data received from a parent; read-only inside the child.

## 17. React Level 3 — Practical Tools

### React Icons
Use icon libraries to add icons to React interfaces.

### React DevTools
Browser development tool used to inspect React component trees, props and state.

### How React Works
A component describes UI. React renders the component tree and updates the relevant UI when state/props change.

### React vs Angular vs Vue
- React → JavaScript library focused on UI
- Angular → full-featured framework
- Vue → progressive JavaScript framework

### Forms in React
Forms collect user input. Common React patterns use state or refs to read and manage form values.

```jsx
function Form() {
  return <input type="text" placeholder="Enter name" />;
}
```

### `useRef`
**Definition:** `useRef` stores a mutable value that persists across renders without causing a re-render when changed; it can also reference a DOM element.

```jsx
const inputRef = useRef(null);
<input ref={inputRef} />
```

### Spread Operator
**Definition:** `...` expands iterable/object values and is commonly used to copy/update objects and arrays.

```jsx
const user = { name: 'Adil', age: 21 };
const updatedUser = { ...user, age: 22 };
```

### Functional Updates
When new state depends on previous state, use the updater function.

```jsx
setCount(previousCount => previousCount + 1);
```

## 18. Advanced State Management

### Context API
**Definition:** Context provides a way to share values across components without passing props through every intermediate component.

```jsx
const ThemeContext = createContext();
```

**Use case:** theme, authentication information, shared settings.

### `useReducer`
**Definition:** `useReducer` manages state using a reducer function and dispatched actions, useful for more complex state logic.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

## 19. Backend / API Data

### Dummy API
An API can provide external data to a frontend application for practice or development.

### `fetch()`
**Definition:** `fetch()` is a browser API used to make HTTP requests.

```jsx
const response = await fetch('https://example.com/api/products');
const data = await response.json();
```

### `useEffect`
**Definition:** `useEffect` is a Hook used to synchronize a component with external systems and perform side effects.

```jsx
useEffect(() => {
  fetchData();
}, []);
```

### Loading State
Show loading UI while asynchronous data is being fetched.

```jsx
if (loading) return <p>Loading...</p>;
```

### Cleanup
Effects can return a cleanup function for subscriptions, timers or other resources.

```jsx
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  return () => clearInterval(timer);
}, []);
```

### Submitting Data with Fetch
Use `fetch()` with methods such as POST to send data to a backend.

```jsx
await fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(user)
});
```

## 20. More Hooks

### `useCallback`
**Definition:** `useCallback` memoizes a function reference so the same function can be reused between renders when dependencies do not change.

```jsx
const handleSave = useCallback(() => {
  console.log('save');
}, []);
```

### `useMemo`
**Definition:** `useMemo` memoizes a calculated value and recalculates it when dependencies change.

```jsx
const total = useMemo(() => price * quantity, [price, quantity]);
```

### Custom Hooks
**Definition:** A custom Hook is a reusable function whose name starts with `use` and that can contain Hook logic.

```jsx
function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}
```

## 21. React Router

### Routes and Layouts
React Router maps URL paths to React UI components.

### Links and Navigation
Use router links/navigation instead of normal page reloads for client-side navigation.

```jsx
<Link to="/about">About</Link>
```

### Loader
A route loader can fetch data needed by a route before rendering its UI.

### Action
A route action can handle data submissions associated with a route.

**Interview question:** Why use React Router?
**Answer:** React Router enables client-side navigation and maps application URLs to React components without full page reloads.

## 22. Redux

### Why Redux?
Redux is a predictable state management library useful when application state needs centralized management.

### Context vs Redux
- Context → sharing values through a component tree.
- Redux → centralized state management with a structured store, actions and reducers.

### How Redux Works
Typical flow:
`UI → dispatch action → reducer → store updates → UI re-renders`

### React with Redux
React components connect to the Redux store and read/update centralized state.

## 23. Redux Toolkit

### Why Redux Toolkit?
Redux Toolkit simplifies Redux setup and reduces boilerplate while providing recommended patterns for Redux development.

### Working with Toolkit
Important concepts include:
- Store
- Slice
- Reducer
- Actions
- Dispatch
- Selectors

Example shape:
```jsx
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1;
    }
  }
});
```

## 24. Course Projects / Practice Path

The selected course uses projects to reinforce the concepts:

1. Todo App Version 1
2. Bharat Clock Version 1
3. Todo App Version 2
4. Calculator Version 1
5. Calculator Version 2
6. Todo App Version 3
7. Social Media Version 1
8. Bharat Clock Version 2
9. Myntra Clone using a real backend

**My personal React Learning project record is separate.** Only projects I personally choose to keep are added there.

## 25. After Completing the Course — Job Preparation

The course roadmap is the core React learning path. After completing it, I will add:

- Git and GitHub workflow
- Deployment
- React interview preparation
- JavaScript interview revision
- Advanced project architecture
- React + AI workflow using tools such as Cursor/Claude where relevant to a job description
- Tailwind CSS as an additional frontend skill

## Completion Rule

For every day/topic I study, my learning record will contain:

- Definition
- Hindi definition/explanation
- Simple explanation
- Syntax/code
- Example
- Important points
- Questions with answers
- Interview questions
- Interview-ready answer
- Practice task
- Project/practical work
- Next topic

A topic is marked **DONE** only after I understand it and practice it.
