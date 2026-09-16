# Day 7 — Responsive UI Interview Preparation

## Core Questions

### Q1. What is responsive UI?
Responsive UI adapts its layout and sizing to different screen sizes and devices.

### Q2. How do you make a React application responsive?
Use CSS media queries or a responsive CSS framework such as Bootstrap. React handles the component structure while CSS controls responsive presentation.

### Q3. What does `col-12 col-sm-6 col-lg-3` mean?
One column per row by default, two columns from the small breakpoint, and four columns from the large breakpoint.

### Q4. Why use a stable key such as `employee.id`?
React uses keys to identify list items consistently during rendering and updates.

### Q5. Why use `map()` for employee cards?
`map()` transforms each employee object into a React element, allowing the UI to be generated dynamically from data.

## Situation-Based Questions

### Situation 1
**Cards work on desktop but overlap on mobile. What do you check?**

Check responsive column classes, Bootstrap `container`/`row` structure, fixed widths and custom CSS.

### Situation 2
**The employee API returns data but cards are empty. What do you check?**

Check the data shape, `map()` expression, console output, property names and whether the array has been populated.

### Situation 3
**React shows a key warning. What do you do?**

Use a stable unique identifier such as `employee.id` when available.

## Interview Answer Pattern

Use this order when explaining a responsive React feature:

1. State the requirement
2. Explain the layout approach
3. Mention Bootstrap/CSS responsive classes
4. Explain dynamic rendering with `map()`
5. Mention stable keys
6. Mention testing on mobile/tablet/desktop
