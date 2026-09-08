# Day 2 — Important React Questions

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
