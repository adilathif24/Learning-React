# Day 3 — React Event Handling

## Progress

### Event Handling — In Progress

Event Handling means responding to actions performed by the user in a React application.

### Concepts covered so far

- `onClick`
- Event handler functions
- Inline event handlers
- Event Handling + `useState`
- `onChange`
- Event object
- `event.target.value`
- Conditional UI based on state
- Controlled input concept

## 1. onClick

React uses `onClick` to respond to button clicks.

```jsx
function handleClick() {
    alert("Button clicked!");
}

<button onClick={handleClick}>Click Me</button>
```

### Real-world example

An e-commerce application can use `onClick` for an **Add to Cart** button.

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

## 2. Inline Event Handler

```jsx
<button onClick={() => alert("Button is clicked")}>
    Click Me
</button>
```

Useful for small actions.

## 3. Event Handling + useState

### Hands-on: Like Button

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

### Real-world use

Like counters, notification counts, cart quantities, unread messages, and similar UI counters use this pattern.

## 4. onChange

`onChange` responds when an input value changes.

```jsx
function handleChange(event) {
    console.log(event.target.value);
}

<input type="text" onChange={handleChange} />
```

## 5. Event Object

React passes an event object to the handler.

```jsx
function handleChange(event) {
    console.log(event.target.value);
}
```

- `event` → event information
- `event.target` → element that triggered the event
- `event.target.value` → current input value

## 6. Hands-on: Live Name Input

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

## Real-world example: Login/Search input

The same `onChange` pattern is used for login forms, search boxes, filters, profile forms, and other interactive inputs.

## Practice completed

### Like Counter
- [x] `useState`
- [x] `onClick`
- [x] Event handler through inline function
- [x] State update
- [x] UI re-render
- [x] `99+` display logic

### Live Name Input
- [x] `useState`
- [x] `onChange`
- [x] Event object
- [x] `event.target.value`
- [x] Conditional rendering
- [x] Controlled input

## Next Event Handling topics

- `onSubmit`
- Passing arguments to event handlers
- Other useful React events
- Event Handling mini-project
- Interview questions

## Day 3 rule

For every concept:

**Concept → Real-world example → Hands-on task → Mini-project → Interview → VS Code → Browser documentation → GitHub**

Status: **Event Handling — In Progress**
