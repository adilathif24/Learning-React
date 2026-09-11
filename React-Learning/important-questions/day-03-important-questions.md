# Day 3 — React Event Handling Interview Questions

## Core Questions

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

## Practical Interview Scenario

**Q: How would you build a product order form in React?**

**Answer:** I would use controlled inputs with `useState`, update the quantity using `onChange`, handle submission using `onSubmit`, call `event.preventDefault()` to prevent page reload, calculate the total price, store the selected order in state, and conditionally render the order summary.

## Day 3 Status

- Event Handling — Completed
- Mouse Events — Completed
- Form Submission — Completed
- Passing Arguments — Completed
- Event Handling Mini-Project — Completed
