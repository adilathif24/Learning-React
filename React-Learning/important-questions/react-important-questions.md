# Important React Questions

1. What is React?
2. Why is React used?
3. What is JSX?
4. What are the rules of JSX?
5. What is a React component?
6. What is a function component?
7. What is a class component?
8. Function component vs class component?
9. What is a reusable component?
10. What is a Fragment?
11. What is import/export in React modules?
12. What is Bootstrap and how can it be used in React?
13. What is `map()`?
14. Why is `map()` commonly used in React?
15. What is the purpose of `key` when rendering a list?
16. What is conditional rendering?
17. What is the ternary operator in JSX?
18. What is the `&&` operator used for in JSX?
19. What are props in React?
20. How are props passed from parent to child?
21. Can props be modified directly?
22. What is the difference between props and state?

## Conditional Rendering — Interview Notes

**Q: What is conditional rendering in React?**

**Answer:** Conditional rendering means displaying different UI based on a condition. React supports patterns such as `if/else`, ternary `? :`, and logical `&&`.

**Q: How does the ternary operator work in JSX?**

**Answer:** It checks a condition and renders one expression if true and another if false: `condition ? trueResult : falseResult`.

## Props — Interview Notes

**Q: What are props in React?**

**Answer:** Props are read-only inputs used to pass data from a parent component to a child component. They make components reusable because different values can be passed to the same child component.

**Q: Can a child component modify props directly?**

**Answer:** No. Props are read-only. The parent can provide new prop values when needed.

**Q: What is the difference between props and state?**

**Answer:** Props are read-only data passed into a component, usually from parent to child. State is data managed inside a component that can change over time.
