# Day 2 — React Level 2

## Status
**In Progress — Conditional Rendering completed ✓**

## Course Section
React Level 2

## Topics Completed
1. Conditional Rendering with `if/else` ✓
2. Conditional Rendering with ternary operator `? :` ✓
3. Conditional Rendering with logical `&&` operator ✓

## Conditional Rendering

### English Definition
Conditional rendering means displaying different UI elements based on a condition.

### Hindi Definition
Condition ke according different UI show karna conditional rendering kehlata hai.

### Method 1 — if/else
```jsx
let login = true;

if (login) {
  return <h1 className="btn btn-success">Login successful</h1>;
} else {
  return <h1 className="btn btn-danger">Try again</h1>;
}
```

### Method 2 — Ternary Operator
```jsx
let login = false;

return (
  <>
    {login ? (
      <h1 className="btn btn-success">Successful</h1>
    ) : (
      <h1 className="btn btn-danger">Try again</h1>
    )}
  </>
);
```

### Syntax
```jsx
condition ? trueResult : falseResult
```

### Method 3 — Logical `&&` Operator
Use `&&` when UI should render only when a condition is true.

### Practice Completed
```jsx
function ConditionalRendering() {
  let login = true;

  return <>
    {login && <h1 className="btn btn-success">success</h1>}
  </>;
}

export default ConditionalRendering;
```

### Simple Explanation
`login && <h1>...</h1>` means: if `login` is true, React renders the `<h1>`. If `login` is false, the JSX element is not rendered.

### Important Points
- `if/else` can be used before returning JSX.
- Ternary `? :` is useful when there are two UI outcomes.
- `&&` is useful when an element should render only when a condition is true.
- Ternary and `&&` are JavaScript expressions that can be used inside JSX with `{}`.

## Interview Questions
**Q: What is conditional rendering in React?**

**Interview-ready answer:** Conditional rendering means displaying different UI based on a condition. In React, we can use `if/else`, the ternary operator, or the logical `&&` operator.

**Q: What is the `&&` operator used for in JSX?**

**Interview-ready answer:** The logical `&&` operator is commonly used to render an element only when a condition is true. If the condition is false, the element is not rendered.

## Next
Props → continue React Level 2.
