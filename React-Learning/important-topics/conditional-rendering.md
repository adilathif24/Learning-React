# Conditional Rendering

## Definition
Conditional rendering means displaying different UI elements based on a condition.

## Hindi Definition
Condition ke according different UI show karna conditional rendering kehlata hai.

## Simple Explanation
If a condition is true, React can show one UI. If it is false, React can show another UI.

## Method 1 — if/else
For larger or more complex conditional logic, use `if/else` before returning JSX.

```jsx
if (login) {
  return <h1>Login successful</h1>;
} else {
  return <h1>Try again</h1>;
}
```

## Method 2 — Ternary Operator ⭐
The ternary operator is useful when there are two possible UI outcomes.

```jsx
{login ? <h1>Successful</h1> : <h1>Try again</h1>}
```

### Syntax
```jsx
condition ? trueResult : falseResult
```

## Method 3 — `&&` Operator ⭐
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
`login && <h1>...</h1>` means if `login` is true, React renders the `<h1>`. If `login` is false, the element is not rendered.

## Important Points
- `if/else` can be used before returning JSX.
- Ternary uses `condition ? trueResult : falseResult`.
- `&&` is useful when there is no alternative UI for the false case.
- Ternary and `&&` expressions can be written inside JSX using `{}`.
- Bootstrap classes can be combined with conditional rendering.

## Interview Questions
**Q: What is conditional rendering in React?**

**Interview-ready answer:** Conditional rendering means displaying different UI based on a condition. In React, we can use `if/else`, the ternary operator, or the logical `&&` operator.

**Q: What is the `&&` operator used for in JSX?**

**Interview-ready answer:** The logical `&&` operator is commonly used to render an element only when a condition is true. If the condition is false, the element is not rendered.

## Practice Completed
- `if/else` login condition.
- Ternary login condition with Bootstrap success/danger UI.
- `&&` login condition rendering success UI only when `login` is true.
