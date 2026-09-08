# Day 2 — React Level 2

## Status
**In Progress — Conditional Rendering + Props + State/useState completed ✓**

## Course Section
React Level 2

## Topics Completed
1. Conditional Rendering with `if/else` ✓
2. Conditional Rendering with ternary operator `? :` ✓
3. Conditional Rendering with logical `&&` operator ✓
4. Props ✓
5. State + `useState` Hook ✓

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

### Method 3 — Logical `&&` Operator
Use `&&` when UI should render only when a condition is true.

## Props

### English Definition
Props (Properties) are read-only inputs used to pass data from a parent component to a child component.

### Hindi Definition
Props ka use parent component se child component ko data pass karne ke liye hota hai.

### Simple Explanation
Parent component data bhejta hai, aur child component `props` ke through data receive karke use karta hai.

**Flow:** Parent → Child

### Syntax
```jsx
<Student name="Syed" skills="React" />

function Student(props) {
  return <h1>{props.name}</h1>;
}
```

### Practice Completed
```jsx
function ExampleForProp() {
  return (
    <div className="container mt-4">
      <Student name="syed" skills="html" />
      <Student name="adil" skills="css" />
      <Student name="syed adil" skills="js" />
      <Student name="syed adil ali" skills="typescript" />
      <Student name="ali syed" skills="react" />
    </div>
  );
}

function Student(props) {
  return (
    <table className="table table-bordered mb-3">
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.skills}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ExampleForProp;
```

### Important Points
- Props means Properties.
- Props are passed from parent to child.
- Props are read-only.
- The same child component can be reused with different values.
- Props can be accessed using `props.name`, `props.skills`, etc.

### Interview Question
**Q: What are props in React?**

**Interview-ready answer:** Props are read-only inputs used to pass data from a parent component to a child component. They make components reusable because we can pass different values to the same child component.

## State + useState

### English Definition
State is data that belongs to a component and can change over time. `useState` is a React Hook used to create and update state in functional components.

### Hindi Definition
State component ka changeable data hota hai. `useState` Hook ka use functional component mein state create aur update karne ke liye hota hai.

### Syntax
```jsx
const [count, setCount] = useState(0);
```

- `count` → current state value
- `setCount` → state update function
- `0` → initial value

### Practice Completed — Counter
```jsx
function AnswerForPractice() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  );
}
```

### Important Points
- `useState` is used inside functional components.
- State can change over time.
- Do not directly modify state.
- Use the setter function to update state.
- State updates cause React to re-render the component.
- One component can have multiple state values.

### Interview Question
**Q: What is `useState` in React?**

**Interview-ready answer:** `useState` is a React Hook that allows functional components to manage state. It returns the current state value and a setter function. When the state is updated using the setter, React re-renders the component.

## Next
CSS Modules / continue React Level 2.
