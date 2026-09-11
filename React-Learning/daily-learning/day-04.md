# Day 4 — React Event Handling: Forms & Form Submission

## 🎯 Day Goal

Learn how React handles form submission and build interactive form-based UI.

## Topics

- `onSubmit`
- Form submission in React
- `event.preventDefault()`
- Reading form values
- Connecting form submission with state
- Passing arguments from form actions
- Real-world form examples
- Practice tasks
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

## 3. Real-World Example — Login Form

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

## 🧠 Key Connection

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

## 📝 Practice

### Task 1 — Registration Form
Build a form with:

- Name
- Email
- Password
- Submit button

On submit, prevent page reload and display the submitted name.

### Task 2 — Contact Form
Build a contact form with:

- Name
- Email
- Message
- Submit button

After submission, display:
`Message sent successfully!`

## 💼 Interview Questions

### Q1. What is `onSubmit` in React?

**Interview Answer:** `onSubmit` is a React event handler used to execute a function when a form is submitted.

### Q2. Why do we use `event.preventDefault()`?

**Interview Answer:** It prevents the browser's default form submission behavior, such as reloading the page, so React can handle the submission logic.

### Q3. How do you handle form submission in React?

**Interview Answer:** Attach a handler function to the form's `onSubmit` event, call `event.preventDefault()`, then validate or process the form data.

## Status

🔄 Day 4 — In Progress

Next: practice `onSubmit`, form validation basics, and the Event Handling mini-project.
