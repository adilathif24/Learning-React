# JSX Rules

## Rule 1 — One Parent Element
A component must return one JSX root/tree. That root can contain multiple elements.

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>React</p>
  </div>
);
```

## Rule 2 — className
HTML uses `class`; JSX uses `className`.

```jsx
<div className="box"></div>
```

## Rule 3 — Self-closing Tags
```jsx
<input />
<br />
<hr />
```

## Interview Question
**Q: What are common JSX rules?**

**Answer:** JSX should return one root/tree, `className` is used instead of `class`, and elements such as `input`, `br` and `hr` are self-closed.
