# Day 3 — React Event Handling Interview Preparation

## Interview Questions

### 1. What is event handling in React?
Event handling means responding to user actions such as clicks, typing, mouse events, and form submission.

### 2. What is `onClick`?
`onClick` is a React event prop used to run a function when an element is clicked.

### 3. Difference between `onClick={handleClick}` and `onClick={handleClick()}`?
`onClick={handleClick}` passes the function to React. `onClick={handleClick()}` calls the function during rendering instead of waiting for the click.

### 4. What is `onChange`?
`onChange` is commonly used with form inputs to respond when their value changes.

### 5. What is `event.target.value`?
It gives the current value of the input element that triggered the event.

### 6. What is a controlled input?
A controlled input is an input whose value is controlled by React state.

### 7. Why is `event.preventDefault()` used in forms?
It prevents the browser's default form submission behavior, such as page reload, so React can handle the submission.

### 8. What is `onSubmit`?
`onSubmit` is used to handle form submission in React.

### 9. How do you pass arguments to an event handler?
Use an arrow function:

```jsx
<button onClick={() => buyProduct("iPhone", 90000)}>
    Buy iPhone
</button>
```

### 10. Can an event handler receive both custom arguments and the event object?
Yes.

```jsx
function handleClick(productName, event) {
    console.log(productName);
    console.log(event);
}

<button onClick={(event) => handleClick("iPhone", event)}>
    Buy
</button>
```

## Practical Scenario

**Q: How would you build a product order form in React?**

**Interview-ready answer:**
I would use controlled inputs with `useState`, update the quantity using `onChange`, handle submission using `onSubmit`, call `event.preventDefault()` to prevent page reload, calculate the total price, store the selected order in state, and conditionally render the order summary.

## Key Concepts to Remember

- User action → React event → event handler → function → UI/state change.
- Event handlers can update state.
- Returning JSX from an event handler does not render it into the component; use state for UI changes.
- Use arrow functions to pass custom arguments.

## Status

- Event Handling — Completed
- onClick — Completed
- onChange — Completed
- Mouse Events — Completed
- onSubmit — Completed
- Controlled Inputs — Completed
- Passing Arguments — Completed
- Event + State — Completed
- Mini Project — Completed
