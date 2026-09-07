# JSX

## Definition
JSX is a syntax extension that allows HTML-like syntax to be written inside JavaScript.

## JSX Rules
1. Return one root JSX tree; use a Fragment when no extra DOM element is needed.
2. Use self-closing syntax for elements without children, such as `<input />`.
3. Use `className` instead of `class`.
4. Use `{}` to place JavaScript expressions inside JSX.

## Example
```jsx
const name = "Syed Adil Ali";

function App() {
  return <h1>Hello {name}</h1>;
}
```
