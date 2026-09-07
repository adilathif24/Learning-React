# Fragment

## Definition
**English:** A Fragment groups multiple JSX elements without adding an extra DOM element.

**Hindi:** Fragment multiple JSX elements ko group karta hai bina extra div/DOM element add kiye.

## Example
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

## Interview Question
**Q: Why do we use Fragment?**

**Answer:** Fragment lets us return/group multiple JSX elements without adding an unnecessary wrapper element to the DOM.
