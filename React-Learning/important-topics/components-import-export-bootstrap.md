# Components, Import/Export and Bootstrap

## Function Component
A function component is a JavaScript function that returns JSX.

```jsx
function Button() {
  return <button>Submit</button>;
}
```

## Class Component
A class component is created using a JavaScript class that extends `React.Component` and implements `render()`. Modern React generally prefers function components with Hooks.

## Reusable Components
Define a component once and use it multiple times.

```jsx
<Button />
<Button />
<Button />
```

## Import and Export
Named export:
```jsx
export function Button() {
  return <button>Submit</button>;
}
```
Import:
```jsx
import { Button } from "./Button.jsx";
```

Default export:
```jsx
export default Button;
```
Import:
```jsx
import Button from "./Button.jsx";
```

## Fragment
Fragment groups multiple JSX elements without adding an extra DOM element.

```jsx
<>
  <h1>Hello</h1>
  <p>React</p>
</>
```

## Bootstrap
Bootstrap is a CSS framework that provides ready-made CSS classes and UI components.

Install:
```bash
npm install bootstrap
```

Import:
```jsx
import "bootstrap/dist/css/bootstrap.min.css";
```
