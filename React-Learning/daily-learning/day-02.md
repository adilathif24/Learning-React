# Day 2 — React Level 2

## Status
**COMPLETED ✓ — Conditional Rendering + Props + State/useState**

## Learning Method Used
For every concept:
1. Definition
2. Hindi explanation
3. Code example
4. Real-world example
5. Hands-on practice
6. Interview question

## Roadmap
**Conditional Rendering → Props → State → useState → Practice → Interview → Day 3**

## Topics Completed
1. Conditional Rendering with `if/else` ✓
2. Conditional Rendering with ternary `? :` ✓
3. Conditional Rendering with logical `&&` ✓
4. Props ✓
5. State ✓
6. `useState` Hook ✓
7. Practice Questions + Answers ✓
8. Interview Questions + Ready Answers ✓

---

## 1. Conditional Rendering

### English Definition
Conditional rendering means showing different UI based on a condition.

### Hindi Definition
Condition ke according different UI show karna Conditional Rendering kehlata hai.

### Explanation
React mein hum condition ke according UI ka different part show kar sakte hain. Login status, user role, stock availability aur permissions jaise cases mein iska use hota hai.

### Methods
- `if / else`
- Ternary operator `? :`
- Logical `&&`

### Code Example
```jsx
const login = true;

// Ternary
{login ? "Login Successful" : "Please Login"}

// Logical &&
{login && <h2>Welcome to React!</h2>}

// if / else
const age = 22;
if (age >= 18) {
  return <h2>You are eligible</h2>;
} else {
  return <h2>You are not eligible</h2>;
}
```

### Real-World Example
E-commerce website mein agar product stock mein hai to **Add to Cart** button show hoga, otherwise **Out of Stock** show hoga.

```jsx
{stock > 0 ? (
  <button>Add to Cart</button>
) : (
  <p>Out of Stock</p>
)}
```

### Hands-on Task
Create a login/logout UI:
- If logged in → `Welcome User` + Logout button
- If logged out → `Please Login` + Login button

### Interview Answer
Conditional rendering means displaying different UI elements based on a condition. Common approaches are if/else, ternary, and logical `&&`.

---

## 2. Props

### English Definition
Props are read-only inputs used to pass data from a parent component to a child component.

### Hindi Definition
Props ka use Parent Component se Child Component ko data bhejne ke liye hota hai.

### Flow
```text
Parent Component
       ↓
      Props
       ↓
Child Component
```

### Code Example
```jsx
function App() {
  return <Student name="Syed" age={22} course="React" />;
}

function Student(props) {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
    </>
  );
}
```

### Real-World Example
A job portal can reuse the same `JobCard` component for different jobs by passing title, company, location and salary through props.

```jsx
<JobCard
  title="React Developer"
  company="ABC Technologies"
  location="Hyderabad"
/>
```

### Reusable Component Example
```jsx
function Student(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Skill: {props.skills}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Student name="Syed" age={22} skills="JavaScript" />
      <Student name="Adil" age={23} skills="React" />
      <Student name="Ali" age={24} skills="Java" />
    </>
  );
}
```

### Important Points
- Props flow Parent → Child.
- Props are read-only.
- Props make components reusable.
- Props can contain strings, numbers, arrays, objects, functions, etc.

### Hands-on Task
Create a reusable `ProductCard` component and pass:
- Product name
- Price
- Category
- Rating

Render at least three products using the same component.

### Practice Completed
Reused the same `Student` component with different `name`, `age`, `course` and `city` values.

### Interview Answer
Props are read-only inputs used to pass data from a parent component to a child component. They make components reusable because the same component can receive different values.

---

## 3. State + useState

### English Definition
State is data that belongs to a component and can change over time. `useState` is a React Hook used to create and update state inside a functional component.

### Hindi Definition
State component ka changeable data hota hai. Jab state change hoti hai, React component ko dobara render karta hai aur updated UI show karta hai.

### Syntax
```jsx
const [state, setState] = useState(initialValue);
```

### Example
```jsx
const [count, setCount] = useState(0);
```

- `count` → current state value
- `setCount` → state update function
- `0` → initial value

### Explanation
State ka use tab hota hai jab UI mein koi value change honi ho, jaise counter, likes, cart items, form input ya toggle.

### Real-World Example — Shopping Cart
Cart mein 2 items hain. User **Add to Cart** click karta hai, state `2 → 3` ho jati hai aur UI automatically update hoti hai.

```jsx
import { useState } from "react";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState(0);

  function addToCart() {
    setCartItems(cartItems + 1);
  }

  return (
    <>
      <h2>Product: iPhone</h2>
      <button onClick={addToCart}>Add to Cart</button>
      <h3>Cart Items: {cartItems}</h3>
    </>
  );
}
```

### Practice Completed — Counter
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

### Hands-on Task — Counter
Build a counter with:
- Increase
- Decrease
- Reset

### Important Points
- `useState` is a React Hook.
- It is used in functional components.
- State can change over time.
- Do not modify state directly.
- Use the setter function to update state.
- Updating state causes React to re-render the component.
- A component can have multiple states.

### Wrong vs Correct
```jsx
// Wrong
count = count + 1;

// Correct
setCount(count + 1);
```

### Interview Answer
`useState` is a React Hook that allows functional components to manage state. It returns the current state value and a setter function. When the state is updated, React re-renders the component.

---

## 4. State vs Props

| Props | State |
|---|---|
| Passed from Parent → Child | Managed by the component |
| Read-only | Can change |
| Used to pass data | Used to manage changing data |
| External input | Component's own changing data |

### Real-World Comparison
In a product card:
- `productName`, `price` → Props
- `quantity`, `isLiked` → State

### Hands-on Task
Build a product card where the product name and price come from props, while the Like count is managed using state.

---

## 5. Practice Questions & Answers

**Q1. What is State?**  
State is data that belongs to a component and can change over time.

**Q2. What is useState?**  
`useState` is a React Hook that allows functional components to create and manage state.

**Q3. What does useState return?**  
It returns the current state value and a function used to update that state.

**Q4. Can we directly modify State?**  
No. State should be updated using its setter function.

**Q5. What happens when State changes?**  
React re-renders the component and updates the UI with the new state value.

**Q6. What is the difference between Props and State?**  
Props are read-only data passed from parent to child, while state is component-managed data that can change over time.

---

## 6. Day 2 Mini Project — Product Card

### Goal
Build a reusable product card using Props + State + Conditional Rendering.

### Requirements
- Product name and price through props
- Like button using `useState`
- Stock status using conditional rendering
- Add to Cart button
- At least three products

### Example
```jsx
import { useState } from "react";

function ProductCard({ name, price, stock }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="card p-3 m-2">
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>

      {stock > 0 ? (
        <button className="btn btn-primary">Add to Cart</button>
      ) : (
        <p>Out of Stock</p>
      )}

      <button
        className="btn btn-outline-danger mt-2"
        onClick={() => setLikes(likes + 1)}
      >
        ❤️ {likes}
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <ProductCard name="iPhone" price={70000} stock={5} />
      <ProductCard name="Laptop" price={60000} stock={0} />
      <ProductCard name="Headphones" price={3000} stock={10} />
    </>
  );
}
```

### Concepts Used
- Components
- JSX
- Props
- State
- `useState`
- Event handling
- Conditional rendering
- Reusable components

---

## 7. Interview Preparation

**Q: What are Props?**  
Props are read-only inputs used to pass data from a parent component to a child component.

**Q: Can Props be modified?**  
No. Props are read-only and should not be directly modified by the child component.

**Q: Why do we use useState?**  
We use `useState` when a component needs to store and update data that can change over time, such as counters, form inputs, or toggles.

**Q: Difference between Props and State?**  
Props are read-only data passed from a parent to a child, while State is data managed inside a component that can change over time.

**Q: What is Conditional Rendering?**  
Conditional rendering means displaying different UI based on a condition, using approaches such as if/else, ternary and logical `&&`.

---

## Day 2 Completed Checklist

- [x] Conditional Rendering — definition + code + real-world example
- [x] Props — definition + code + real-world example
- [x] State — definition + code + real-world example
- [x] `useState` — definition + code + real-world example
- [x] Props vs State
- [x] Hands-on practice
- [x] Product Card mini-project
- [x] Interview preparation

## Files / Practice
- `daily-learning/day-02-roadmap.md` — Day-2 roadmap and flow
- `important-topics/props.md` — Props notes
- `important-topics/useState.md` — State/useState notes
- `important-questions/day-02-important-questions.md` — practice questions
- `interview-preparation/day-02-react-interview-preparation.md` — interview answers

# Day 2 Result

**React Level 2 concepts completed ✓**

# Next
**Day 3 — Props as Children → Passing Functions via Props → State Lifting → Event Handling**
