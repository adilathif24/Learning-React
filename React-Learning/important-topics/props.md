# Props in React

## Definition
Props (Properties) are read-only inputs used to pass data from a parent component to a child component.

## Hindi Definition
Props ka use parent component se child component ko data pass karne ke liye hota hai.

## Simple Explanation
Parent component data bhejta hai, aur child component `props` ke through us data ko receive karke use karta hai.

**Flow:** Parent → Child

## Syntax
```jsx
<Student name="Syed" skills="React" />

function Student(props) {
  return <h1>{props.name}</h1>;
}
```

## Multiple Props
```jsx
<Student name="Syed" age={22} skill="React" />

function Student(props) {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h2>Skill: {props.skill}</h2>
    </>
  );
}
```

## Destructuring Props
```jsx
function Student({ name, age, skill }) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{skill}</h2>
    </>
  );
}
```

## Practice Completed
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

## Important Points
- Props means Properties.
- Props are passed from parent to child.
- Props are read-only inputs.
- The same child component can be reused with different prop values.
- Props can contain strings, numbers, booleans, arrays, objects, functions and other values.
- A child component reads props but should not directly modify them.

## Props vs State

| Props | State |
|---|---|
| Parent → Child data | Component's own changing data |
| Read-only | Can be updated through state setters |
| External input | Internal component data |
| Used to make components reusable | Used to manage changing UI/data |

## Interview Question
**Q: What are props in React?**

**Interview-ready answer:** Props are read-only inputs used to pass data from a parent component to a child component. They make components reusable because we can pass different values to the same child component.

**Q: Can a child component modify its props directly?**

**Interview-ready answer:** No. Props are read-only. If data needs to change, the parent can provide new props, or state can be used for changing data.

## Practice
- Create one parent component.
- Pass different `name` and `skill` props to the same child component.
- Display the props inside the child component.
- Try the same example using props destructuring.
