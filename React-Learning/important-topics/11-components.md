# Components

## Definition
**English:** A component is a reusable piece of UI that can contain markup, logic and behaviour.

**Hindi:** Component UI ka ek reusable block hota hai jisme markup aur logic ho sakta hai. Ek baar define karke multiple times use kar sakte hain.

## Example
```jsx
function Button() {
  return <button>Submit</button>;
}

function App() {
  return (
    <>
      <Button />
      <Button />
    </>
  );
}
```

## Interview Question
**Q: What is a component in React?**

**Answer:** A component is a reusable UI block that can contain markup, logic and behaviour.
