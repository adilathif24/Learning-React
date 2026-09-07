# Day 1 — Important React Questions

## 1. What is React?
**Answer:** React is a JavaScript library for building user interfaces using reusable components.

**Example:**
```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

## 2. Why do we use React?
**Answer:** React helps us build UI using reusable components and update the UI when data changes.

## 3. Is React a library or framework?
**Answer:** React is a JavaScript library.

## 4. What is Vite?
**Answer:** Vite is a frontend build tool used to create, develop and build modern web applications quickly. Vite is not React.

## 5. What is JSX?
**Answer:** JSX is a syntax extension for JavaScript that allows HTML-like markup inside JavaScript.

## 6. What is a component?
**Answer:** A component is a reusable piece of UI that can contain markup, logic and behaviour.

## 7. What is a functional component?
**Answer:** A functional component is a React component defined as a JavaScript function that returns JSX.

## 8. What is a class component?
**Answer:** A class component is created using a JavaScript class that extends `React.Component` and uses `render()` to return JSX.

## 9. What is the difference between `class` and `className`?
**Answer:** HTML uses `class`, while JSX uses `className`.

## 10. Why do JSX tags sometimes need to be self-closing?
**Answer:** JSX requires elements without children to be self-closed, such as `<input />`, `<br />`, and `<hr />`.

## 11. What is a Fragment?
**Answer:** A Fragment groups multiple JSX elements without adding an extra DOM element.

## 12. How do you write JavaScript inside JSX?
**Answer:** JavaScript expressions are written inside curly braces `{}`.

```jsx
const name = 'Adil';
<h1>Hello {name}</h1>
```

## 13. Can we write `if` directly inside JSX `{}`?
**Answer:** No. JavaScript expressions can be used inside `{}`, but statements such as `if` and `for` are not written directly there.

## 14. Why should custom component names start with a capital letter?
**Answer:** Capitalization tells React that the name represents a custom component rather than a normal HTML tag.

## 15. What is the difference between named and default export?
**Answer:** Named exports are imported with `{}`, while a default export is imported without `{}`.

## 16. What is Bootstrap?
**Answer:** Bootstrap is a CSS framework that provides ready-made CSS classes and UI components for building responsive websites quickly.

## 17. What is the flow of a Vite React app?
**Answer:** `index.html → root div → main.jsx → App.jsx → React UI`.

## 18. What is the purpose of `main.jsx`?
**Answer:** It connects React to the HTML root element and renders the `App` component.

## 19. What is the purpose of `package.json`?
**Answer:** It stores project metadata, scripts and dependencies.
