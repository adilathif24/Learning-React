# Day 3 — Event Handling Interview Preparation

## Event Handling

**Q: What is Event Handling in React?**  
**Interview Answer:** Event Handling means responding to user actions such as clicks, typing, and form submission. React provides event handler props such as `onClick`, `onChange`, and `onSubmit`.

**Q: What is `onClick`?**  
**Interview Answer:** `onClick` is a React event handler used to execute a function when a user clicks an element.

**Q: What is `onChange`?**  
**Interview Answer:** `onChange` is commonly used with form inputs to respond when the input value changes.

**Q: What is the event object?**  
**Interview Answer:** The event object contains information about the event and the element that triggered it. For inputs, `event.target.value` can be used to read the current value.

**Q: How do you pass an argument to an event handler?**  
**Interview Answer:** Wrap the function call in an arrow function, for example `onClick={() => buyProduct("iPhone")}`.

**Q: What is the difference between `onClick={handleClick}` and `onClick={handleClick()}`?**  
**Interview Answer:** `onClick={handleClick}` passes the function to React to execute when the event occurs. `onClick={handleClick()}` calls the function immediately during rendering.

**Q: How do Event Handling and State work together?**  
**Interview Answer:** An event handler can call a state setter. The state update changes component data and React re-renders the UI with the new value.

## Practical examples covered

- Like counter using `onClick` + `useState`
- Live name input using `onChange` + `event.target.value`
- Conditional greeting based on input state

## Status

🔄 Event Handling is still in progress. Remaining practice: `onSubmit`, passing arguments, other useful events, and the Event Handling mini-project.
