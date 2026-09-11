# Day 4 — Event Handling: Forms & Form Submission — Interview Preparation

## Form Submission

**Q: What is `onSubmit` in React?**  
**Interview Answer:** `onSubmit` is a React event handler used to execute a function when a form is submitted.

**Q: Why do we use `event.preventDefault()` in a React form?**  
**Interview Answer:** It prevents the browser's default form submission behavior, such as reloading the page, so React can handle the submission logic.

**Q: How do you handle form submission in React?**  
**Interview Answer:** Attach a handler function to the form's `onSubmit` event, call `event.preventDefault()`, then validate or process the form data.

## Controlled Inputs

**Q: What is a controlled input?**  
**Interview Answer:** A controlled input is a form input whose value is managed by React state and updated through an event such as `onChange`.

**Q: What does `event.target.value` do?**  
**Interview Answer:** It reads the current value of the form element that triggered the event.

**Q: How does `onChange` work with controlled inputs?**  
**Interview Answer:** `onChange` runs when the input value changes and can use `event.target.value` to update React state through a state setter.

**Q: Why can `Number()` be useful with an input of type number?**  
**Interview Answer:** The input value received through `event.target.value` is a string, so `Number()` can convert it to a numeric value before calculations.

## Practical Questions

**Q: How do you connect form submission with state?**  
**Interview Answer:** Store input values in state using controlled inputs, then read those state values inside the `onSubmit` handler to validate, process, calculate, or send the data.

**Q: How would you handle a registration form in React?**  
**Interview Answer:** I would use controlled inputs for name, email, and password, update state with `onChange`, prevent the default submission with `preventDefault()`, and process the form data inside `onSubmit`.

**Q: How would you show a success message after form submission?**  
**Interview Answer:** I would store a submitted or success flag in state and conditionally render the success message after the form is successfully submitted.

**Q: How would you calculate a product order total from a form?**  
**Interview Answer:** I would store the quantity in state, convert the input value to a number using `Number()`, multiply it by the product price, and store the resulting order data in state.

## Key Flow

```text
User enters data
      ↓
onChange
      ↓
event.target.value
      ↓
setState()
      ↓
React state
      ↓
User submits form
      ↓
onSubmit
      ↓
preventDefault()
      ↓
Read / validate state
      ↓
Process / calculate
      ↓
setState()
      ↓
Conditional UI update
```

## Day 4 Skills Demonstrated

- `onSubmit`
- `event.preventDefault()`
- `useState`
- `onChange`
- `event.target.value`
- Controlled inputs
- Form submission
- Registration Form
- Contact Form
- Login Form
- Product Order Form
- `Number()` conversion
- Conditional rendering
- Bootstrap form UI

## Status

✅ **Day 4 — COMPLETED**
