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
function ConditionalRendering() {
  let login = true;

  if (login) {
    return <h1>Login successful</h1>;
  } else {
    return <h1>Try again</h1>;
  }
}
```

## Method 2 — Ternary Operator ⭐
The ternary operator is useful when there are two possible UI outcomes.

### Syntax
```jsx
condition ? trueResult : falseResult
```

### Example
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

## Method 3 — `&&` Operator
Use `&&` when UI should render only when a condition is true.

```jsx
{isAdmin && <button>Admin Panel</button>}
```

## Important Points
- `if/else` can be used before returning JSX.
- Ternary uses `condition ? trueResult : falseResult`.
- Ternary can be written inside JSX using `{}`.
- `&&` is useful when there is no alternative UI to render for the false case.
- Bootstrap classes can be combined with conditional rendering.

## Interview Questions
**Q: What is conditional rendering in React?**

**Interview-ready answer:** Conditional rendering means displaying different UI based on a condition. In React, we can use `if/else`, the ternary operator, or the logical `&&` operator.

**Q: How does the ternary operator work in JSX?**

**Interview-ready answer:** The ternary operator checks a condition and renders one expression when it is true and another expression when it is false, using `condition ? trueResult : falseResult`.

## Practice Completed
- `if/else` login condition.
- Ternary login condition with Bootstrap success/danger buttons.
