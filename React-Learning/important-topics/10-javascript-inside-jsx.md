# JavaScript Inside JSX

## Definition
JavaScript expressions can be written inside JSX using curly braces `{}`.

## Hindi
JSX ke andar JavaScript expressions likhne ke liye `{ }` use karte hain.

## Example
```jsx
const name = 'Adil';
const age = 21;

function App() {
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Age: {age}</p>
      <p>2 + 3 = {2 + 3}</p>
    </div>
  );
}
```

Variables, calculations, function calls and ternary expressions can be used inside `{}`. Statements such as `if` and `for` are not written directly inside JSX braces.

## Interview Question
**Q: How do you use JavaScript inside JSX?**

**Answer:** We use curly braces to place JavaScript expressions inside JSX, for example `{name}` or `{2 + 3}`.
