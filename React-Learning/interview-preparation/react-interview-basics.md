# React Interview Preparation — Basics

## What is React?
**Answer:** React is a JavaScript library for building interactive and dynamic user interfaces using reusable components.

**Example:**
```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

## What is JSX?
**Answer:** JSX is a syntax extension that allows HTML-like syntax to be written inside JavaScript.

**Example:**
```jsx
const name = "Adil";
<h1>Hello {name}</h1>;
```

## What is a Function Component?
**Answer:** A function component is a JavaScript function that returns JSX.

## What is a Fragment?
**Answer:** A Fragment groups multiple JSX elements without adding an extra DOM element.

## What is map() used for in React?
**Answer:** `map()` traverses array elements and returns a new array; in React it is commonly used to render lists of JSX elements.

## What is conditional rendering?
**Answer:** Conditional rendering displays different UI based on a condition.

**Example:**
```jsx
const isLoggedIn = true;
return isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>;
```

## How does if/else conditional rendering work?
**Answer:** We evaluate a condition before returning JSX and return different JSX from the `if` and `else` branches.

```jsx
if (login) {
  return <h1>Login successful</h1>;
} else {
  return <h1>Try again</h1>;
}
```

## How does the ternary operator work in JSX?
**Answer:** The ternary operator checks a condition and renders one expression when true and another when false.

```jsx
{login ? <h1>Successful</h1> : <h1>Try again</h1>}
```

## What is the `&&` operator used for in JSX?
**Answer:** It is commonly used when an element should render only when a condition is true.

```jsx
{isAdmin && <button>Admin Panel</button>}
```

## What are props in React?
**Answer:** Props are read-only inputs used to pass data from a parent component to a child component. They make components reusable because we can pass different values to the same child component.

**Example:**
```jsx
function App() {
  return <Student name="Syed" skill="React" />;
}

function Student(props) {
  return <h1>{props.name} - {props.skill}</h1>;
}
```

## Can a child component modify props directly?
**Answer:** No. Props are read-only. The parent provides the values, and the child reads them.

## Props vs State
**Answer:** Props are read-only data passed into a component, usually from parent to child. State is data managed inside a component that can change over time.

## Interview Tip
Keep answers short first. Give a small example if the interviewer asks for more detail.
