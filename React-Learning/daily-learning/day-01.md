# Day 1 — React Foundation

## Status
**Completed**

## What I Learned
1. What is React
2. Why React
3. React vs HTML / CSS / JavaScript
4. React setup with Vite
5. Project structure
6. `main.jsx`
7. `index.html`
8. JSX
9. JSX rules
10. JavaScript expressions inside JSX
11. Components
12. Functional components
13. Class components
14. Reusable components
15. Import/export
16. Fragments
17. Bootstrap basics

## Practice Completed
### Function Component
```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

### Dynamic Name
```jsx
const name = 'Syed Adil Ali';
<h1>Hello {name}</h1>
```

### Reusable Button
```jsx
function Button() {
  return <button className="btn btn-primary">Submit</button>;
}
```

Used three times:
```jsx
<Button />
<Button />
<Button />
```

### Own Project
**Student Profile** — my own practice project using the concepts learned so far.

## Local App
http://localhost:5175/

## Code Concepts Practiced
- Function components
- JSX
- `{}` expressions
- Reusable components
- Named/default import/export
- Bootstrap classes
- Class component with `extends React.Component` and `render()`

## Removed From Day 1 Record
Todo App Version 1 is not included in the Day 1 project list.

## Next
Continue with the selected course sequence: React Level 2 → rendering lists with `map()` → conditional rendering.
