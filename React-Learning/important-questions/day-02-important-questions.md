# Day 2 + Day 3 — Important React Questions

## Conditional Rendering

**Q1. What is Conditional Rendering?**  
**Answer:** Conditional rendering means displaying different UI based on a condition.

**Q2. What are common ways to do Conditional Rendering?**  
**Answer:** `if/else`, ternary operator `? :`, and logical `&&`.

## Props

**Q3. What are Props?**  
**Answer:** Props are read-only inputs used to pass data from a parent component to a child component.

**Q4. Which direction do Props flow?**  
**Answer:** Normally Parent → Child.

**Q5. Can a child directly modify Props?**  
**Answer:** No. Props are read-only.

**Q6. Why are Props useful?**  
**Answer:** Props make components reusable because the same component can receive different values.

## State / useState

**Q7. What is State?**  
**Answer:** State is data that belongs to a component and can change over time.

**Q8. What is useState?**  
**Answer:** `useState` is a React Hook that allows functional components to create and manage state.

**Q9. What does useState return?**  
**Answer:** The current state value and a setter function used to update the state.

**Q10. What happens when State changes?**  
**Answer:** React re-renders the component and updates the UI with the new state value.

**Q11. Can State be modified directly?**  
**Answer:** No. State should be updated using its setter function.

## State vs Props

**Q12. What is the difference between Props and State?**  
**Answer:** Props are read-only data passed from a parent to a child, while State is data managed inside a component that can change over time.

## Day 3 — Event Handling

**Q13. What is Event Handling in React?**  
**Answer:** Event Handling means responding to user actions such as clicks, typing, and form submission.

**Q14. What is `onClick`?**  
**Answer:** `onClick` is a React event handler used to respond to click events.

**Q15. What is `onChange`?**  
**Answer:** `onChange` is commonly used with form inputs to respond when their value changes.

**Q16. What is the Event Object?**  
**Answer:** The event object contains information about the event and the element that triggered it.

**Q17. What is `event.target.value`?**  
**Answer:** It gives the current value of the input element that triggered the event.

**Q18. How do Event Handling and State work together?**  
**Answer:** A user event can call a state setter, changing state and causing React to re-render the UI with the updated value.

**Q19. What is an inline event handler?**  
**Answer:** An event handler written directly inside JSX, for example `onClick={() => alert("Hello")}`.

**Q20. Why should `onClick={handleClick}` usually be used instead of `onClick={handleClick()}`?**  
**Answer:** `onClick={handleClick}` passes the function for React to call when the event occurs. `handleClick()` calls it immediately during rendering.
