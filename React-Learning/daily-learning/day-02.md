# Day 2 — React Level 2

## Status
**COMPLETED ✓ — Conditional Rendering + Props + State/useState**

## Roadmap
**Conditional Rendering → Props → State → useState → Practice → Interview → Day 3**

## Topics Completed
1. Conditional Rendering with `if/else` ✓
2. Conditional Rendering with ternary `? :` ✓
3. Conditional Rendering with logical `&&` ✓
4. Props ✓
5. State ✓
6. `useState` Hook ✓
7. Practice Questions + Answers ✓
8. Interview Questions + Ready Answers ✓

## 1. Conditional Rendering

### Definition
Conditional rendering means showing different UI based on a condition.

### Hindi
Condition ke according different UI show karna Conditional Rendering kehlata hai.

### Methods
- `if / else`
- Ternary operator `? :`
- Logical `&&`

### Examples
```jsx
const login = true;

// Ternary
{login ? "Login Successful" : "Please Login"}

// Logical &&
{login && <h2>Welcome to React!</h2>}

// if / else
const age = 22;
if (age >= 18) {
  return <h2>You are eligible</h2>;
} else {
  return <h2>You are not eligible</h2>;
}
```

### Practice
Create a login/logout UI using conditional rendering.

### Interview Answer
Conditional rendering means displaying different UI elements based on a condition. Common approaches are if/else, ternary, and logical `&&`.

## 2. Props

### Definition
Props are read-only inputs used to pass data from a parent component to a child component.

### Hindi
Props ka use Parent Component se Child Component ko data bhejne ke liye hota hai.

**Flow:** Parent → Child

### Example
```jsx
function App() {
  return <Student name="Syed" age={22} course="React" />;
}

function Student(props) {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
    </>
  );
}
```

### Practice Completed
Reused the same `Student` component with different `name`, `age`, `course` and `city` values.

### Important Points
- Props flow Parent → Child.
- Props are read-only.
- Props make components reusable.
- Props can contain strings, numbers, arrays, objects, functions, etc.

### Interview Answer
Props are read-only inputs used to pass data from a parent component to a child component. They make components reusable because the same component can receive different values.

## 3. State + useState

### Definition
State is data that belongs to a component and can change over time. `useState` is a React Hook used to create and update state inside a functional component.

### Hindi
State component ka changeable data hota hai. Jab state change hoti hai, React component ko dobara render karta hai aur updated UI show karta hai.

### Syntax
```jsx
const [state, setState] = useState(initialValue);
```

Example:
```jsx
const [count, setCount] = useState(0);
```

- `count` → current state value
- `setCount` → state update function
- `0` → initial value

### Practice Completed — Counter
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

### Important Points
- `useState` is a React Hook.
- It is mainly used in functional components.
- State can change over time.
- Do not modify state directly.
- Use the setter function to update state.
- Updating state causes React to re-render the component.
- A component can have multiple states.

### Wrong vs Correct
```jsx
// Wrong
count = count + 1;

// Correct
setCount(count + 1);
```

### Interview Answer
`useState` is a React Hook that allows functional components to manage state. It returns the current state value and a setter function. When the state is updated, React re-renders the component.

## 4. State vs Props

| Props | State |
|---|---|
| Passed from Parent → Child | Managed by the component |
| Read-only | Can change |
| Used to pass data | Used to manage changing data |
| External input | Component's own changing data |

## 5. Practice Questions & Answers

**Q1. What is State?**  
State is data that belongs to a component and can change over time.

**Q2. What is useState?**  
`useState` is a React Hook that allows functional components to create and manage state.

**Q3. What does useState return?**  
It returns the current state value and a function used to update that state.

**Q4. Can we directly modify State?**  
No. State should be updated using its setter function.

**Q5. What happens when State changes?**  
React re-renders the component and updates the UI with the new state value.

## 6. Interview Preparation

**Q: What are Props?**  
Props are read-only inputs used to pass data from a parent component to a child component.

**Q: Can Props be modified?**  
No. Props are read-only and should not be directly modified by the child component.

**Q: Why do we use useState?**  
We use `useState` when a component needs to store and update data that can change over time, such as counters, form inputs, or toggles.

**Q: Difference between Props and State?**  
Props are read-only data passed from a parent to a child, while State is data managed inside a component that can change over time.

## Files / Practice
- `daily-learning/day-02-roadmap.md` — Day-2 roadmap and flow
- `important-topics/props.md` — Props notes
- `important-topics/useState.md` — State/useState notes

## Next
**Day 3 — continue the React course sequence.**
