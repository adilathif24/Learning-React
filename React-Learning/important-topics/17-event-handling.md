# React Event Handling

## Definition
Event handling in React means responding to user actions such as clicks, typing, mouse events, and form submission.

## Common Events
- `onClick`
- `onChange`
- `onSubmit`
- `onMouseEnter`
- `onMouseLeave`
- `onMouseOver`
- `onMouseOut`
- `onMouseDown`
- `onMouseUp`
- `onMouseMove`

## Event Handler
```jsx
function handleClick() {
    alert("Button clicked!");
}

<button onClick={handleClick}>Click Me</button>
```

## Event + State
```jsx
const [likes, setLikes] = useState(0);

<button onClick={() => setLikes(likes + 1)}>
    Likes: {likes}
</button>
```

## Controlled Input
```jsx
const [name, setName] = useState("");

<input
    value={name}
    onChange={(event) => setName(event.target.value)}
/>
```

## Form Submission
```jsx
function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
}

<form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
</form>
```

## Passing Arguments
```jsx
function buyProduct(productName, price) {
    console.log(productName, price);
}

<button onClick={() => buyProduct("iPhone", 90000)}>
    Buy iPhone
</button>
```

## Important Rule
Use an arrow function when custom arguments need to be passed to an event handler. Do not call the handler directly during render.

## Real-world Use Cases
- Shopping cart
- Login and registration forms
- Likes and counters
- Product selection
- Search inputs
- Interactive UI
