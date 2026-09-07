# Conditional Rendering

## Definition
Conditional rendering means displaying different UI elements based on a condition.

## Ternary Operator
```jsx
function App() {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
    </>
  );
}
```

## && Operator
Use it when UI should render only when a condition is true.

```jsx
{isAdmin && <button>Admin Panel</button>}
```

## if/else
For larger conditional logic, an `if/else` can be used before returning JSX.
