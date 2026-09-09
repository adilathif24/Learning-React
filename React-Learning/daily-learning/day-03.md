# Day 3 — React Event Handling

## Progress

### Event Handling — In Progress

## 1. Event Handling — Definition

**English:** Event Handling means responding to actions performed by the user in a React application, such as clicking, typing, or submitting a form.

**Hindi:** Event Handling ka matlab hai user ke actions ko handle karna, jaise button click, input mein typing, ya form submit.

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

## 2. onClick

**Definition:** `onClick` is a React event handler used to execute a function when a user clicks an element.

### Basic code

```jsx
function handleClick() {
    alert("Button clicked!");
}

function App() {
    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );
}

export default App;
```

### Real-world example — Add to Cart

```jsx
<button onClick={addToCart}>
    Add to Cart
</button>
```

```text
User clicks Add to Cart
        ↓
onClick runs
        ↓
addToCart()
        ↓
Cart state changes
        ↓
UI updates
```

## 3. Inline Event Handler

**Definition:** An inline event handler is an event function written directly inside JSX.

```jsx
<button onClick={() => alert("Button is clicked")}>
    Click Me
</button>
```

Useful for small actions.

## 4. Event Handler Function

**Definition:** A function that is executed when a React event occurs is called an event handler.

```jsx
function handleClick() {
    alert("Button clicked!");
}

<button onClick={handleClick}>Click Me</button>
```

### Important

Correct:

```jsx
onClick={handleClick}
```

Usually wrong for event registration:

```jsx
onClick={handleClick()}
```

`handleClick()` calls the function immediately during rendering instead of passing the function for the click event.

## 5. Event Handling + useState

**Definition:** An event can call a state setter to update component data and cause the UI to update.

### Hands-on — Like Button

```jsx
import { useState } from "react";

function Task() {
    const [likes, setLikes] = useState(0);

    return (
        <button onClick={() => setLikes(likes + 1)}>
            ❤️ Likes: {likes}
        </button>
    );
}

export default Task;
```

### User's improved practice

```jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Task() {
    const [likes, setLikes] = useState(0);

    return (
        <div className="p-4">
            <button
                type="button"
                className="btn btn-primary position-relative"
                onClick={() => setLikes(likes + 1)}
            >
                ❤️ Likes
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {likes > 99 ? '99+' : likes}
                    <span className="visually-hidden">unread likes</span>
                </span>
            </button>
        </div>
    );
}

export default Task;
```

### Real-world uses

- Social media likes
- Notification counts
- Shopping cart quantities
- Unread message counts

## 6. onChange

**Definition:** `onChange` is a React event handler commonly used with inputs to respond when their value changes.

```jsx
function handleChange(event) {
    console.log(event.target.value);
}

function App() {
    return (
        <input
            type="text"
            onChange={handleChange}
        />
    );
}

export default App;
```

### Real-world uses

- Search box
- Login form
- Registration form
- Profile editing
- Filters

## 7. Event Object

**Definition:** The event object contains information about the event and the element that triggered it.

```jsx
function handleChange(event) {
    console.log(event);
}
```

Important properties:

```jsx
event.target

event.target.value
```

- `event.target` → the element that triggered the event
- `event.target.value` → the current value of an input

## 8. onChange + useState

### Hands-on — Live Name Input

```jsx
import { useState } from 'react';

function Task() {
    const [name, setName] = useState('');

    const handler = (event) => {
        setName(event.target.value);
    };

    return (
        <>
            <p>Enter your Name</p>

            <input
                type="text"
                value={name}
                onChange={handler}
                placeholder="Enter Your Name"
            />

            {name && <h1>Hello {name}</h1>}
        </>
    );
}

export default Task;
```

### Flow

```text
User types "Syed"
        ↓
onChange fires
        ↓
handler(event)
        ↓
event.target.value
        ↓
setName("Syed")
        ↓
React re-renders
        ↓
Hello Syed
```

## 9. Controlled Input

**Definition:** A controlled input is a form input whose value is controlled by React state.

```jsx
const [name, setName] = useState('');

<input
    value={name}
    onChange={(event) => setName(event.target.value)}
/>
```

Here, React state is the source of truth for the input value.

## 10. Conditional UI with Event + State

```jsx
{name && <h1>Hello {name}</h1>}
```

When `name` has a value, the greeting is displayed.

This combines:

```text
Event Handling + State + Conditional Rendering
```

## 11. Event Handling + State — Real-world example

### Shopping Cart

```jsx
import { useState } from 'react';

function ShoppingCart() {
    const [cartItems, setCartItems] = useState(0);

    function addToCart() {
        setCartItems(cartItems + 1);
    }

    return (
        <>
            <h2>Product: iPhone</h2>
            <h3>Price: ₹70,000</h3>

            <button onClick={addToCart}>
                Add to Cart
            </button>

            <h2>Cart Items: {cartItems}</h2>
        </>
    );
}

export default ShoppingCart;
```

## What we learned today

- [x] Event Handling definition
- [x] `onClick`
- [x] Event handler function
- [x] Inline event handler
- [x] `onClick={handleClick}` vs `onClick={handleClick()}`
- [x] Event Handling + `useState`
- [x] `onChange`
- [x] Event object
- [x] `event.target`
- [x] `event.target.value`
- [x] Controlled input
- [x] Conditional UI based on state
- [x] Like Counter hands-on
- [x] Live Name Input hands-on
- [x] Shopping Cart real-world example

## Next Event Handling topics

- `onSubmit`
- Passing arguments to event handlers
- Other useful React events
- Event Handling mini-project
- Final interview questions

## Day 3 learning method

**Concept → Definition → Syntax → Real-world example → Hands-on task → Mini-project → Interview → VS Code → Browser documentation → GitHub**

Status: **Event Handling — In Progress**
