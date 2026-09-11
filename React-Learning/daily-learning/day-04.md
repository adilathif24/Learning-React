# Day 4 — React Event Handling: Forms & Form Submission

## 🎯 Day Goal

Learn how React handles form submission and build interactive form-based UI.

## Topics Completed

- `onSubmit`
- Form submission in React
- `event.preventDefault()`
- Reading form values
- Connecting form submission with state
- Controlled form inputs
- `onChange`
- `event.target.value`
- Passing arguments from form actions
- Real-world Login Form
- Registration Form
- Contact Form
- Product Order Form mini-project
- Bootstrap UI styling
- Interview preparation

## 1. onSubmit

### English Definition
`onSubmit` is a React event handler used to run a function when a form is submitted.

### Hinglish
`onSubmit` tab use hota hai jab user form ko submit karta hai. React mein hum form ke `onSubmit` par handler function attach karte hain.

### Basic Example

```jsx
function LoginForm() {
    function handleSubmit(event) {
        event.preventDefault();
        alert("Form submitted");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter username" />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
```

## 2. preventDefault()

### English Definition
`event.preventDefault()` prevents the browser's default form submission behavior, allowing React to handle the submission.

### Hinglish
Normally browser form submit hone ke baad page reload kar sakta hai. `preventDefault()` us default behavior ko rokta hai, taaki React apni logic execute kar sake.

## 3. Controlled Form Inputs

A controlled input gets its current value from React state and updates that state through `onChange`.

```jsx
const [email, setEmail] = useState("");

<input
    type="email"
    value={email}
    onChange={(event) => setEmail(event.target.value)}
    placeholder="Email"
/>
```

### Key Connection

```text
User types
    ↓
onChange
    ↓
event.target.value
    ↓
setState()
    ↓
React state updated
```

## 4. Real-World Example — Login Form

A login form can use `onSubmit` to collect user input, validate it, and then send the data to an API.

```jsx
import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        console.log({
            email,
            password,
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
            />

            <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
            />

            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
```

## 🧠 Key Connection — Form Submission

```text
User submits form
       ↓
     onSubmit
       ↓
 handleSubmit()
       ↓
preventDefault()
       ↓
Read / validate state
       ↓
API request or UI update
```

## 5. Practice Completed — Registration Form

### Task
Build a form with:

- Name
- Email
- Password
- Submit button

### Completed Code

```jsx
import { useState } from "react";

function RegistrationForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submittedName, setSubmittedName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setSubmittedName(name);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
                <button type="submit">Register</button>
            </form>

            {submittedName && <h3>Registered Name: {submittedName}</h3>}
        </>
    );
}

export default RegistrationForm;
```

### What this demonstrates

- Three controlled inputs
- `onChange`
- `event.target.value`
- `onSubmit`
- `event.preventDefault()`
- State update after submission
- Conditional rendering of submitted data

## 6. Practice Completed — Contact Form

### Task
Build a contact form with:

- Name
- Email
- Message
- Submit button

### Completed Code

```jsx
import { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Message" />
                <button type="submit">Send Message</button>
            </form>

            {submitted && <p>Message sent successfully!</p>}
        </>
    );
}

export default ContactForm;
```

### What this demonstrates

- Controlled text input
- Controlled email input
- Controlled textarea
- `onChange`
- `onSubmit`
- `preventDefault()`
- Conditional success message

## 7. Day 4 Mini-Project — Product Order Form

### Features implemented

- Fixed product name and price
- Quantity controlled input
- `useState` for quantity
- `onChange` for quantity updates
- `onSubmit` for form submission
- `event.preventDefault()`
- `Number()` conversion
- Total price calculation
- Selected order stored in state
- Conditional rendering of order summary
- Bootstrap responsive card UI

### Core Logic

```jsx
const [quantity, setQuantity] = useState(1);
const [selectedItems, setSelectedItems] = useState(null);

function onSubmit(event) {
    event.preventDefault();

    const computedTotal = Number(quantity) * price;

    setSelectedItems({
        name,
        price,
        quantity: Number(quantity),
        total: computedTotal,
    });
}
```

### Form Structure

```jsx
<form onSubmit={onSubmit}>
    <input type="number" min="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
    <button type="submit">Add to Cart</button>
</form>
```

### Result

```text
Product: iPhone
Quantity: 2
Total: ₹180,000

Added Successfully ✅
```

## 🔗 Complete Event + Form Flow

```text
Input
  ↓
onChange
  ↓
useState
  ↓
User enters data
  ↓
Submit
  ↓
onSubmit
  ↓
event.preventDefault()
  ↓
Read state values
  ↓
Process / calculate
  ↓
setState
  ↓
Conditional Rendering
  ↓
Updated UI
```

## 💼 Interview Questions

### Q1. What is `onSubmit` in React?

**Interview Answer:** `onSubmit` is a React event handler used to execute a function when a form is submitted.

### Q2. Why do we use `event.preventDefault()`?

**Interview Answer:** It prevents the browser's default form submission behavior, such as reloading the page, so React can handle the submission logic.

### Q3. How do you handle form submission in React?

**Interview Answer:** Attach a handler function to the form's `onSubmit` event, call `event.preventDefault()`, then validate or process the form data.

### Q4. What is a controlled input?

**Interview Answer:** A controlled input is a form input whose value is managed by React state and updated through an event such as `onChange`.

### Q5. What does `event.target.value` do?

**Interview Answer:** It reads the current value of the form element that triggered the event.

### Q6. Why can `Number()` be useful with an input of type number?

**Interview Answer:** The input value received through `event.target.value` is a string, so `Number()` can convert it to a numeric value before calculations.

## 🎯 Day 4 Status

✅ **COMPLETED**

### Completed Practice

- Login Form
- Controlled inputs
- Registration Form — completed with code
- Contact Form — completed with code
- Product Order Form mini-project
- Bootstrap styling

### Key Skills Demonstrated

`useState` • `onChange` • `onSubmit` • `event.target.value` • `preventDefault()` • controlled inputs • calculations • conditional rendering • Bootstrap

### Next

Continue with the next React course topic after Event Handling/Form Submission.
