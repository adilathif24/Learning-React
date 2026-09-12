# React Event Handling

## Definition

Event Handling means responding to user actions in a React application, such as clicking, typing, mouse movement, or submitting a form.

## Hinglish

User application par koi action karta hai, jaise button click, input mein typing, mouse event, ya form submit, aur React us action ke according function execute karta hai.

## Event Flow

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

## onClick

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

## Event Handling + useState

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

Real-world uses:
- Social media likes
- Notification counts
- Shopping cart quantities
- Unread message counts

## onChange + Event Object

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

## Controlled Input

A controlled input is an input whose value is controlled by React state.

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

## Mouse Events

Covered events:
- `onClick`
- `onMouseEnter`
- `onMouseLeave`
- `onMouseOver`
- `onMouseOut`
- `onMouseDown`
- `onMouseUp`
- `onMouseMove`

For UI changes caused by events, use state rather than returning JSX from the event handler.

## onSubmit

```jsx
function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
}

<form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
</form>
```

`event.preventDefault()` prevents the browser's default form submission behavior, such as page reload, so React can handle the submission.

## Passing Arguments

```jsx
function buyProduct(productName, price) {
    console.log(productName, price);
}

<button onClick={() => buyProduct("iPhone", 90000)}>
    Buy iPhone
</button>
```

Multiple arguments:

```jsx
<button onClick={() => buyProduct(101, "iPhone", 90000)}>
    Buy iPhone
</button>
```

Argument + event:

```jsx
function handleClick(productName, event) {
    console.log(productName);
    console.log(event);
}

<button onClick={(event) => handleClick("iPhone", event)}>
    Buy
</button>
```

## Mini Project: Product Order Form

This combines `useState`, controlled inputs, `onChange`, `onSubmit`, `preventDefault`, calculation, conditional rendering, and Bootstrap.

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

## Key Interview Points

- Event handling responds to user actions.
- `onClick={handleClick}` passes a function; `onClick={handleClick()}` calls it during render.
- `event.target.value` reads the current input value.
- Controlled inputs are managed by React state.
- `event.preventDefault()` prevents default browser form submission behavior.
- Use an arrow function when passing custom arguments to an event handler.
