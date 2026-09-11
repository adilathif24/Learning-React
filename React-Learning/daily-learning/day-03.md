# Day 3 — React Event Handling

## Progress
### Event Handling — COMPLETED ✅

## Learning Method Used
For every concept:
1. Definition
2. Hindi/Hinglish explanation
3. Syntax + code example
4. Real-world example
5. Hands-on practice
6. Interview point

## Topics Completed
- [x] Event Handling
- [x] `onClick`
- [x] Inline Event Handler
- [x] Event Handler Function
- [x] `onClick={handleClick}` vs `onClick={handleClick()}`
- [x] Event Handling + `useState`
- [x] `onChange`
- [x] Event Object
- [x] `event.target`
- [x] `event.target.value`
- [x] Controlled Input
- [x] Conditional UI with Event + State
- [x] Mouse Events: `onMouseEnter`, `onMouseLeave`, `onMouseOver`
- [x] `onSubmit`
- [x] `event.preventDefault()`
- [x] Form submission with controlled inputs
- [x] Passing arguments to event handlers
- [x] Multiple arguments: product ID, name, price
- [x] Event Handling + State mini-project
- [x] Bootstrap UI integration

---

## 1. Event Handling

**English:** Event Handling means responding to actions performed by the user in a React application, such as clicking, typing, mouse movement, or submitting a form.

**Hindi/Hinglish:** Event Handling ka matlab user ke actions ko handle karna, jaise button click, input mein typing, mouse events, ya form submit.

```text
User Action
    ↓
React Event
    ↓
Event Handler
    ↓
Function
    ↓
UI / State changes
```

### Basic Syntax
```jsx
function handleClick() {
    alert("Button clicked!");
}

<button onClick={handleClick}>Click Me</button>
```

---

## 2. onClick

`onClick` executes a function when an element is clicked.

```jsx
function handleClick() {
    alert("Button clicked!");
}

<button onClick={handleClick}>Click Me</button>
```

### Inline Handler
```jsx
<button onClick={() => alert("Button is clicked")}>
    Click Me
</button>
```

### Important
```jsx
onClick={handleClick}     // correct: passes function
onClick={handleClick()}   // usually wrong: calls during render
```

---

## 3. Event Handling + useState

Events can update state, which causes React to update the UI.

```jsx
import { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0);

    return (
        <button onClick={() => setLikes(likes + 1)}>
            ❤️ Likes: {likes}
        </button>
    );
}

export default LikeButton;
```

### Real-world uses
- Social media likes
- Notification counts
- Shopping cart quantities
- Unread message counts

---

## 4. onChange + Event Object

**English:** `onChange` is commonly used with inputs to respond when their value changes.

**Hinglish:** User input mein kuch type/change karta hai to `onChange` trigger hota hai.

```jsx
function handleChange(event) {
    console.log(event.target.value);
}

<input type="text" onChange={handleChange} />
```

Important properties:
```jsx
event.target
event.target.value
```

---

## 5. Controlled Input

**English:** A controlled input is an input whose value is controlled by React state.

**Hinglish:** Input ki value React state ke control mein hoti hai.

```jsx
import { useState } from "react";

function ProfileName() {
    const [name, setName] = useState("");

    return (
        <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
        />
    );
}

export default ProfileName;
```

Flow:
```text
User types
   ↓
onChange
   ↓
event.target.value
   ↓
setName()
   ↓
React state updates
   ↓
UI updates
```

---

## 6. Mouse Events

Covered:
- `onClick`
- `onMouseEnter`
- `onMouseLeave`
- `onMouseOver`
- `onMouseOut`
- `onMouseDown`
- `onMouseUp`
- `onMouseMove`

### Important concept
Returning JSX from an event handler does **not** render that JSX into the component. For UI changes, use state.

```jsx
import { useState } from "react";

function MouseOver() {
    const [message, setMessage] = useState("");

    function mouseOverEffect() {
        setMessage("You just passed over the button!");
    }

    return (
        <>
            <button onMouseOver={mouseOverEffect}>
                Move Mouse Here
            </button>
            {message && <p>{message}</p>}
        </>
    );
}

export default MouseOver;
```

---

## 7. onSubmit / Form Submission

**English:** `onSubmit` is used to handle a form submission in React.

**Hinglish:** Jab user Login, Registration, Contact ya kisi form ko submit karta hai, `onSubmit` trigger hota hai.

### Basic Syntax
```jsx
function handleSubmit(event) {
    event.preventDefault();

    console.log("Form submitted");
}

<form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
</form>
```

### `preventDefault()`
```jsx
event.preventDefault();
```

It prevents the browser's default form submission behavior, such as page reload, so React can handle the submission.

### Controlled Login Form Pattern
```jsx
import { useState } from "react";

function UserLogin() {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userEmail, setUserEmail] = useState("");

    function onSubmit(event) {
        event.preventDefault();

        console.log("UserName:", userName);
        console.log("UserPassword:", userPassword);
        console.log("UserEmail:", userEmail);

        setUserName("");
        setUserPassword("");
        setUserEmail("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={userName}
                placeholder="Enter Your Name"
                onChange={(event) => setUserName(event.target.value)}
            />

            <input
                type="password"
                value={userPassword}
                placeholder="Enter Your Password"
                onChange={(event) => setUserPassword(event.target.value)}
            />

            <input
                type="email"
                value={userEmail}
                placeholder="Enter Your Email"
                onChange={(event) => setUserEmail(event.target.value)}
            />

            <button type="submit">Login</button>
        </form>
    );
}

export default UserLogin;
```

---

## 8. Passing Arguments to Event Handlers

**English:** We can pass additional information to an event handler using an arrow function.

**Hinglish:** Click ke time product ID, name, price jaise extra data function ko pass kar sakte hain.

### Correct Syntax
```jsx
function buyProduct(productName, price) {
    console.log(productName, price);
}

<button onClick={() => buyProduct("iPhone", 90000)}>
    Buy iPhone
</button>
```

### Multiple Arguments
```jsx
<button onClick={() => buyProduct(101, "iPhone", 90000)}>
    Buy iPhone
</button>
```

### Argument + Event
```jsx
function handleClick(productName, event) {
    console.log(productName);
    console.log(event);
}

<button onClick={(event) => handleClick("iPhone", event)}>
    Buy
</button>
```

---

## 9. Final Mini-Project — Product Order Form

This project combines `useState`, controlled input, `onChange`, `onSubmit`, `preventDefault`, calculation, conditional rendering, and Bootstrap.

```jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Product() {
    const [name] = useState("iPhone");
    const [price] = useState(90000);
    const [quantity, setQuantity] = useState(1);
    const [selectedItems, setSelectedItems] = useState(null);

    function onSubmit(event) {
        event.preventDefault();

        const computedTotal = Number(quantity) * price;

        setSelectedItems({
            name: name,
            price: price,
            quantity: Number(quantity),
            total: computedTotal,
        });
    }

    return (
        <div className="container mt-5" style={{ maxWidth: "450px" }}>
            <div className="card shadow-sm p-4 border-0 bg-light rounded-3">
                <form onSubmit={onSubmit}>
                    <h2 className="card-title h3 text-primary mb-2">{name}</h2>
                    <h4 className="text-secondary mb-4">₹{price.toLocaleString()}</h4>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Quantity:</label>
                        <input
                            type="number"
                            min="1"
                            className="form-control form-control-lg"
                            value={quantity}
                            onChange={(event) => setQuantity(event.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold">
                        Add to Cart
                    </button>
                </form>

                {selectedItems && (
                    <div className="alert alert-success mt-4">
                        <h5>Added Successfully ✅</h5>
                        <p>Product: {selectedItems.name}</p>
                        <p>Quantity: {selectedItems.quantity}</p>
                        <p>Total: ₹{selectedItems.total.toLocaleString()}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Product;
```

### Project flow
```text
Product
  ↓
Quantity input
  ↓
onChange
  ↓
State update
  ↓
Add to Cart
  ↓
onSubmit
  ↓
preventDefault()
  ↓
price × quantity
  ↓
setSelectedItems()
  ↓
Conditional Rendering
  ↓
Order summary
```

---

## Interview Questions

### Q1. What is event handling in React?
**Answer:** Event handling means responding to user actions such as clicks, typing, mouse events, and form submission.

### Q2. What is the difference between `onClick={handleClick}` and `onClick={handleClick()}`?
**Answer:** `onClick={handleClick}` passes the function to React. `onClick={handleClick()}` calls it immediately during rendering.

### Q3. What is `event.target.value`?
**Answer:** It gives the current value of the input element that triggered the event.

### Q4. Why use `event.preventDefault()` in forms?
**Answer:** It prevents the browser's default form submission behavior, such as page reload, so React can handle the form submission.

### Q5. What is a controlled input?
**Answer:** A controlled input is an input whose value is managed by React state.

### Q6. How do you pass arguments to an event handler?
**Answer:** Use an arrow function, for example:
```jsx
onClick={() => buyProduct("iPhone", 90000)}
```

---

## Day 3 Final Status

**Event Handling — COMPLETED ✅**

### GitHub / VS Code learning checkpoint
```text
React-Learning/
└── daily-learning/
    └── day-03.md
```

### Recommended Day 3 practice files
```text
Day-03/
├── src/
│   ├── 01-event-handling.jsx
│   ├── 02-onclick.jsx
│   ├── 03-onchange.jsx
│   ├── 04-mouse-events.jsx
│   ├── 05-onsubmit.jsx
│   ├── 06-event-arguments.jsx
│   ├── 07-product-order.jsx
│   └── App.jsx
```

## Next
**Day 3 interview revision → Day 4 / next React topic**
