# Day 3 — React Event Handling

## Progress
### Event Handling — In Progress

## Learning Method Used
For every concept:
1. Definition
2. Hindi explanation
3. Code example
4. Real-world example + solution
5. Hands-on task + solution
6. Interview question

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

### Code Example
```jsx
function handleClick() {
    alert("Button clicked!");
}

function App() {
    return <button onClick={handleClick}>Click Me</button>;
}

export default App;
```

### Real-World Example + Solution — Add to Cart
```jsx
import { useState } from "react";

function Product() {
    const [cartItems, setCartItems] = useState(0);

    function addToCart() {
        setCartItems(cartItems + 1);
    }

    return (
        <div className="container mt-4">
            <h2>iPhone</h2>
            <button className="btn btn-primary" onClick={addToCart}>
                Add to Cart
            </button>
            <p className="mt-2">Cart Items: {cartItems}</p>
        </div>
    );
}

export default Product;
```

### Hands-on Task + Solution
Create a button that displays an alert when clicked.

```jsx
function App() {
    function handleClick() {
        alert("Successfully clicked!");
    }

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            Click Me
        </button>
    );
}

export default App;
```

---

## 2. onClick

**Definition:** `onClick` is a React event handler used to execute a function when a user clicks an element.

### Code Example
```jsx
function handleClick() {
    alert("Button clicked!");
}

function App() {
    return <button onClick={handleClick}>Click Me</button>;
}

export default App;
```

### Real-World Example + Solution
A shopping website uses `onClick` for Add to Cart.

```jsx
function addToCart() {
    alert("Product added to cart");
}

<button onClick={addToCart}>Add to Cart</button>
```

### Hands-on Task + Solution
Create a button that changes its message when clicked.

```jsx
import { useState } from "react";

function App() {
    const [message, setMessage] = useState("Click the button");

    return (
        <div>
            <h2>{message}</h2>
            <button onClick={() => setMessage("Button clicked!")}>
                Click Me
            </button>
        </div>
    );
}

export default App;
```

---

## 3. Inline Event Handler

**Definition:** An inline event handler is an event function written directly inside JSX.

### Code Example
```jsx
<button onClick={() => alert("Button is clicked")}>
    Click Me
</button>
```

### Real-World Example + Solution
Small UI actions such as opening a menu can use an inline handler.

```jsx
<button onClick={() => alert("Menu opened")}>Menu</button>
```

### Hands-on Task + Solution
Create an inline button that shows `Welcome to React`.

```jsx
function App() {
    return (
        <button onClick={() => alert("Welcome to React")}>
            Welcome
        </button>
    );
}

export default App;
```

---

## 4. Event Handler Function

**Definition:** A function that is executed when a React event occurs is called an event handler.

### Code Example
```jsx
function handleClick() {
    alert("Button clicked!");
}

<button onClick={handleClick}>Click Me</button>
```

### Real-World Example + Solution
A logout button can call a dedicated `handleLogout` function.

```jsx
function handleLogout() {
    alert("User logged out");
}

function App() {
    return <button onClick={handleLogout}>Logout</button>;
}

export default App;
```

### Hands-on Task + Solution
Create `handleClick()` and connect it to a button.

```jsx
function App() {
    function handleClick() {
        alert("Task completed");
    }

    return <button onClick={handleClick}>Complete Task</button>;
}

export default App;
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

---

## 5. Event Handling + useState

**Definition:** An event can call a state setter to update component data and cause the UI to update.

### Real-World Example + Solution — Like Button
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

### Hands-on Task + Solution — Like Button with 99+
```jsx
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
                    {likes > 99 ? "99+" : likes}
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

---

## 6. onChange

**Definition:** `onChange` is a React event handler commonly used with inputs to respond when their value changes.

### Code Example
```jsx
function handleChange(event) {
    console.log(event.target.value);
}

function App() {
    return <input type="text" onChange={handleChange} />;
}

export default App;
```

### Real-World Example + Solution — Search Box
```jsx
import { useState } from "react";

function SearchBox() {
    const [search, setSearch] = useState("");

    function handleSearch(event) {
        setSearch(event.target.value);
    }

    return (
        <div className="container mt-4">
            <input
                className="form-control"
                type="text"
                placeholder="Search jobs..."
                onChange={handleSearch}
            />
            <p>Searching for: {search}</p>
        </div>
    );
}

export default SearchBox;
```

### Hands-on Task + Solution
Create an input that prints the current text below it.

```jsx
import { useState } from "react";

function App() {
    const [text, setText] = useState("");

    return (
        <div>
            <input
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="Type something"
            />
            <h3>{text}</h3>
        </div>
    );
}

export default App;
```

---

## 7. Event Object

**Definition:** The event object contains information about the event and the element that triggered it.

### Code Example
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

### Real-World Example + Solution
Read the value entered into a search input.

```jsx
function handleSearch(event) {
    console.log("Search:", event.target.value);
}

function App() {
    return <input onChange={handleSearch} placeholder="Search" />;
}

export default App;
```

### Hands-on Task + Solution
Display the input value using the event object.

```jsx
import { useState } from "react";

function App() {
    const [value, setValue] = useState("");

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <>
            <input onChange={handleChange} />
            <p>You typed: {value}</p>
        </>
    );
}

export default App;
```

- `event.target` → the element that triggered the event
- `event.target.value` → the current value of an input

---

## 8. onChange + useState

### Real-World Example + Solution — Live Search
```jsx
import { useState } from "react";

function Search() {
    const [query, setQuery] = useState("");

    function handleChange(event) {
        setQuery(event.target.value);
    }

    return (
        <>
            <input value={query} onChange={handleChange} />
            <h3>Search: {query}</h3>
        </>
    );
}

export default Search;
```

### Hands-on Task + Solution — Live Name Input
```jsx
import { useState } from "react";

function Task() {
    const [name, setName] = useState("");

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

---

## 9. Controlled Input

**Definition:** A controlled input is a form input whose value is controlled by React state.

### Real-World Example + Solution — Profile Name
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

### Hands-on Task + Solution
Create a controlled email input.

```jsx
import { useState } from "react";

function App() {
    const [email, setEmail] = useState("");

    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter email"
            />
            <p>Email: {email}</p>
        </div>
    );
}

export default App;
```

---

## 10. Conditional UI with Event + State

### Real-World Example + Solution
Show a greeting only after the user enters a name.

```jsx
{name && <h1>Hello {name}</h1>}
```

### Hands-on Task + Solution
Create a button that toggles a message.

```jsx
import { useState } from "react";

function App() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
            </button>

            {show && <h2>Welcome to React!</h2>}
        </div>
    );
}

export default App;
```

This combines:
```text
Event Handling + State + Conditional Rendering
```

---

## 11. Event Handling + State — Real-world example

### Shopping Cart Solution
```jsx
import { useState } from "react";

function ShoppingCart() {
    const [cartItems, setCartItems] = useState(0);

    function addToCart() {
        setCartItems(cartItems + 1);
    }

    return (
        <div className="container mt-4">
            <h2>Product: iPhone</h2>
            <h3>Price: ₹70,000</h3>
            <button className="btn btn-primary" onClick={addToCart}>
                Add to Cart
            </button>
            <h2>Cart Items: {cartItems}</h2>
        </div>
    );
}

export default ShoppingCart;
```

### Hands-on Task + Solution — Cart Counter
Add `Increase`, `Decrease` and `Reset` buttons to the cart count.

```jsx
import { useState } from "react";

function CartCounter() {
    const [items, setItems] = useState(0);

    return (
        <div className="container mt-4">
            <h2>Cart Items: {items}</h2>

            <button className="btn btn-success m-2" onClick={() => setItems(items + 1)}>
                Increase
            </button>

            <button className="btn btn-danger m-2" onClick={() => setItems(items - 1)}>
                Decrease
            </button>

            <button className="btn btn-secondary m-2" onClick={() => setItems(0)}>
                Reset
            </button>
        </div>
    );
}

export default CartCounter;
```

---

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
- [x] Like Counter hands-on + solution
- [x] Live Name Input hands-on + solution
- [x] Shopping Cart real-world example + solution

## Next Event Handling topics
- `onSubmit`
- Passing arguments to event handlers
- Other useful React events
- Event Handling mini-project
- Final interview questions

## Day 3 learning method
**Concept → Definition → Syntax → Real-world example + solution → Hands-on task + solution → Mini-project → Interview → VS Code → Browser documentation → GitHub**

Status: **Event Handling — In Progress**
