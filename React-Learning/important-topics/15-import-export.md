# Import / Export

## Named Export
```jsx
export function Button() {
  return <button>Submit</button>;
}
```

## Named Import
```jsx
import { Button } from './Button.jsx';
```

## Default Export
```jsx
export default Button;
```

## Default Import
```jsx
import Button from './Button.jsx';
```

## Interview Question
**Q: Difference between named and default import?**

**Answer:** Named imports use curly braces and must match the exported name. Default imports do not use curly braces and can use the importing name chosen by the developer.
