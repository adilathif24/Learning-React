# Functional Component

## Definition
A functional component is a React component defined as a JavaScript function that returns JSX.

## Hindi
Function component ek JavaScript function hota hai jo JSX return karta hai.

## Example
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

## Important Rule
Custom component names start with a capital letter.

## Interview Question
**Q: What is a functional component?**

**Answer:** It is a React component written as a JavaScript function that returns JSX.
