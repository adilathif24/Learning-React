# Day 2 — React Level 2

## Status
**In Progress — Conditional Rendering + Props completed ✓**

## Course Section
React Level 2

## Topics Completed
1. Conditional Rendering with `if/else` ✓
2. Conditional Rendering with ternary operator `? :` ✓
3. Conditional Rendering with logical `&&` operator ✓
4. Props ✓

## Conditional Rendering

### English Definition
Conditional rendering means displaying different UI elements based on a condition.

### Hindi Definition
Condition ke according different UI show karna conditional rendering kehlata hai.

### Method 1 — if/else
```jsx
let login = true;

if (login) {
  return <h1 className="btn btn-success">Login successful</h1>;
} else {
  return <h1 className="btn btn-danger">Try again</h1>;
}
```

### Method 2 — Ternary Operator
```jsx
let login = false;

return (
  <>
    {login ? (
      <h1 className="btn btn-success">Successful</h1>
    ) : (
      <h1 className="btn btn-danger">Try again</h1>
    )}
  </>
);
```

### Method 3 — Logical `&&` Operator
Use `&&` when UI should render only when a condition is true.

## Props

### English Definition
Props (Properties) are read-only inputs used to pass data from a parent component to a child component.

### Hindi Definition
Props ka use parent component se child component ko data pass karne ke liye hota hai.

### Simple Explanation
Parent component data bhejta hai, aur child component `props` ke through data receive karke use karta hai.

**Flow:** Parent → Child

### Syntax
```jsx
<Student name="Syed" skills="React" />

function Student(props) {
  return <h1>{props.name}</h1>;
}
```

### Practice Completed
```jsx
function ExampleForProp() {
  return (
    <div className="container mt-4">
      <h1 className="h4 mb-3">
        Prop is a read-only input used to pass data from parent to child.
      </h1>

      <Student name="syed" skills="html" />
      <Student name="adil" skills="css" />
      <Student name="syed adil" skills="js" />
      <Student name="syed adil ali" skills="typescript" />
      <Student name="ali syed" skills="react" />
    </div>
  );
}

function Student(props) {
  return (
    <table className="table table-bordered mb-3">
      <thead className="table-dark">
        <tr>
          <th>Student Name</th>
          <th>Skills</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-primary">
          <td>{props.name}</td>
          <td>{props.skills}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ExampleForProp;
```

### Important Points
- Props means Properties.
- Props are passed from parent to child.
- Props are read-only.
- The same child component can be reused with different values.
- Props can be accessed using `props.name`, `props.skills`, etc.
- Props destructuring can make the child component code shorter.

### Interview Question
**Q: What are props in React?**

**Interview-ready answer:** Props are read-only inputs used to pass data from a parent component to a child component. They make components reusable because we can pass different values to the same child component.

**Q: Can a child component modify props directly?**

**Interview-ready answer:** No. Props are read-only. If data needs to change, the parent can provide new props or state can be used for changing data.

## Next
CSS Modules → continue React Level 2.
