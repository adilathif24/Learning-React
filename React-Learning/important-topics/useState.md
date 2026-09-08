# useState Hook

## Definition
`useState` is a React Hook that allows functional components to manage state. It returns the current state value and a setter function. When the setter updates the state, React re-renders the component.

## Hindi Explanation
State component ka changeable data hota hai. Jab state update hoti hai, React component ko dobara render karta hai.

## Syntax
```jsx
const [state, setState] = useState(initialValue);
```

- `state` → current value
- `setState` → state update karne ka function
- `initialValue` → starting value

## Example
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}

export default Counter;
```

## Practice Completed
```jsx
function AnswerForPractice() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
```

## Important Points
- `useState` is used inside functional components.
- State can change over time.
- Do not directly modify state.
- Use the setter function to update state.
- State updates cause React to re-render the component.
- One component can have multiple state values.

## Common Mistake
```jsx
count = count + 1; // ❌
```

Use:
```jsx
setCount(count + 1); // ✅
```

## Interview Question
**Q: What is `useState` in React?**

**Interview-ready answer:** `useState` is a React Hook that allows functional components to manage state. It returns the current state value and a setter function. When the state is updated using the setter, React re-renders the component.

## Status
✅ Completed through practice
