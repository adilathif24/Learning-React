# Day 3 — React Event Handling + Workshop Interview Preparation

## Event Handling Interview Questions

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
Fetch the API data, store or use the returned data in the component, and render it dynamically in JSX.

### 12. Why use search and filtering?
Search and filtering help users find relevant records from a larger dataset.

### 13. What is React Router?
React Router is used to manage navigation between different routes/views in a React application.

### 14. Why use routing in React?
Routing allows different components/views to be displayed for different routes while maintaining the React application flow.

### 15. What is an SPA?
SPA means Single Page Application. A React SPA can keep the application on one page while different components/views are loaded or updated as the user navigates.

### 16. Explain the workshop's practical flow.
A real application can fetch API data, render it dynamically, provide search and filtering, and use React Router to navigate between different views in an SPA.

## Practical Scenario — Job Dashboard

**Question:** How would you build a Job Dashboard in React?

**Interview-ready answer:**
I would fetch job data from an API, render the jobs dynamically, add search and filtering for the job list, and use React Router for different views such as the job list and job details while keeping the application as a SPA.

## Practical Scenario — Product Order Form

**Question:** How would you build a product order form in React?

**Interview-ready answer:**
I would use controlled inputs with `useState`, update the quantity using `onChange`, handle submission using `onSubmit`, call `event.preventDefault()` to prevent page reload, calculate the total price, store the selected order in state, and conditionally render the order summary.

## Key Concepts to Remember

- User action → React event → event handler → function → UI/state change.
- Event handlers can update state.
- Returning JSX from an event handler does not render it into the component; use state for UI changes.
- Use arrow functions to pass custom arguments.
- API data can be rendered dynamically in React.
- Search/filtering is useful for data-driven UIs.
- React Router manages application routes/views.
- SPA navigation can update views/components without traditional full-page navigation.

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
- API Data → UI practical flow — Learned
- Search / Filtering practical flow — Learned
- React Router practical concept — Learned
- SPA concept — Learned
