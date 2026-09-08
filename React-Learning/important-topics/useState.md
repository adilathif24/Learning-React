# State & useState in React

## Definition
State is data that belongs to a component and can change over time. `useState` is a React Hook used to create and update state inside a functional component.

## Hindi Explanation
State component ka changeable data hota hai. Jab state change hoti hai, React component ko dobara render karta hai aur updated UI show karta hai.

## Syntax
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

## Practice — Counter
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

## Important Points
- `useState` is a React Hook.
- It is mainly used in functional components.
- State can change over time.
- State should not be modified directly.
- Use the setter function to update state.
- Updating state causes React to re-render the component.
- A component can have multiple state values.

## Wrong vs Correct
```jsx
// Wrong
count = count + 1;

// Correct
setCount(count + 1);
```

## Practice Questions & Answers

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

**Q6. Can a component have multiple states?**  
Yes. A component can have multiple `useState` declarations for different pieces of state.

## State vs Props

| Props | State |
|---|---|
| Passed from Parent → Child | Managed by the component |
| Read-only | Can change |
| Used to pass data | Used to manage changing data |
| External input | Component's own changing data |

## Interview-Ready Answers

**Q: What is useState in React?**  
`useState` is a React Hook that allows functional components to manage state. It returns the current state value and a setter function. When the state is updated, React re-renders the component.

**Q: Why do we use useState?**  
We use `useState` when a component needs to store and update data that can change over time, such as counters, form inputs, or toggles.

**Q: Why should we not modify State directly?**  
State should not be modified directly. We use the setter function so React can process the update and re-render the component.

## Status
✅ Completed through practice
