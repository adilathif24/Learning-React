# map() Method in React

## Definition
`map()` is a JavaScript array method used to traverse each element of an array and return a new array.

## React Use
In React, `map()` is commonly used to render an array of data as multiple JSX elements.

## Example
```jsx
function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <>
      {skills.map((skill, index) => (
        <h3 key={index}>{skill}</h3>
      ))}
    </>
  );
}
```

## Key
React list elements need a `key` so React can identify list items. Using the index is acceptable for a simple static list, but stable unique IDs are preferable for dynamic lists.
