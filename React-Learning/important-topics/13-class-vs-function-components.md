# Class vs Function Components

## Function Component
A JavaScript function that returns JSX.

```jsx
function Welcome() {
  return <h1>Welcome</h1>;
}
```

## Class Component
A JavaScript class that extends `React.Component` and uses `render()` to return JSX.

```jsx
import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Welcome</h1>;
  }
}
```

## Interview Question
**Q: What is the difference between function and class components?**

**Answer:** A function component is a JavaScript function that returns JSX, while a class component extends `React.Component` and uses `render()`. Modern React commonly uses function components and Hooks.
