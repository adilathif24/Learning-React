# Day 2 — React Level 2

## Status
**In Progress — Conditional Rendering completed ✓**

## Course Section
React Level 2

## Topics Completed
1. Conditional Rendering with `if/else` ✓
2. Conditional Rendering with ternary operator `? :` ✓

## 1. Conditional Rendering

### English Definition
Conditional rendering means displaying different UI elements based on a condition.

### Hindi Definition
Condition ke according different UI show karna conditional rendering kehlata hai.

### Simple Explanation
If a condition is true, React can show one UI. If it is false, React can show another UI.

### Method 1 — if/else
```jsx
function ConditionalRendering() {
  let login = true;

  if (login) {
    return <h1>Login successful</h1>;
  } else {
    return <h1>Try again</h1>;
  }
}
```

### Method 2 — Ternary Operator
```jsx
function ConditionalRendering() {
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
}
```

### Syntax
```jsx
condition ? trueResult : falseResult
```

### Important Points
- `if/else` can be used before returning JSX.
- Ternary `? :` is commonly used when there are two UI outcomes.
- JavaScript expressions such as ternary expressions can be written inside JSX using `{}`.
- Bootstrap classes can be combined with conditional rendering to change UI styling.

### Interview Question
**Q: What is conditional rendering in React?**

**Interview-ready answer:** Conditional rendering means displaying different UI based on a condition. In React, we can use `if/else`, the ternary operator, or the logical `&&` operator.

**Q: How does the ternary operator work in JSX?**

**Interview-ready answer:** The ternary operator checks a condition and renders one expression when it is true and another expression when it is false, using `condition ? trueResult : falseResult`.

## Practice Completed

### if/else
```jsx
let login = true;

if (login) {
  return <h1 className="btn btn-success">Login successful</h1>;
} else {
  return <h1 className="btn btn-danger">Try again</h1>;
}
```

### Ternary Operator
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

## Next
Logical `&&` conditional rendering → continue React Level 2.
