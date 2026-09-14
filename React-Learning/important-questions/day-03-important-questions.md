# Day 3 — React Event Handling + Workshop Interview Questions

## Event Handling Questions

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

## Workshop Topics Learned Today

### 11. How do you render API data in React?
Fetch the API data, store or use the returned data in the component, and render it dynamically in the JSX UI.

### 12. Why are search and filtering useful in a data-driven React UI?
They help users find relevant records from a larger dataset instead of viewing every record.

### 13. What is React Router?
React Router is used to manage navigation between different routes/views in a React application.

### 14. Why use routing in a React application?
Routing lets an application display different components/views for different URLs while maintaining the React application flow.

### 15. What is an SPA?
SPA means Single Page Application. A React SPA can keep the application on one page while different components/views are loaded or updated as the user navigates.

### 16. Explain the practical flow discussed in the workshop.
A real application can fetch API data, render it dynamically, provide search and filtering, and use React Router to navigate between different views in an SPA.

## Practical Interview Scenario

**Q: How would you build a Job Dashboard in React?**

**Answer:** I would fetch job data from an API, render the jobs dynamically, add search and filtering for the job list, and use React Router for different views such as the job list and job details while keeping the application as a SPA.

## Product Order Form Scenario

**Q: How would you build a product order form in React?**

**Answer:** I would use controlled inputs with `useState`, update the quantity using `onChange`, handle submission using `onSubmit`, call `event.preventDefault()` to prevent page reload, calculate the total price, store the selected order in state, and conditionally render the order summary.

## Day 3 Status

- Event Handling — Completed
- Mouse Events — Completed
- Form Submission — Completed
- Passing Arguments — Completed
- Event Handling Mini-Project — Completed
- API Data → UI practical flow — Learned
- Search / Filtering practical flow — Learned
- React Router practical concept — Learned
- SPA concept — Learned
