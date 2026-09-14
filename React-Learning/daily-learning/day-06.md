# Day 6 — React Application Development: Components, Search, Dynamic UI & API Integration 🚀

**Date: 14 September 2026**

## Progress

### React Application Development — COMPLETED TOPICS ✅

- Component Structure
- Reusable Components
- Parent → Child Communication
- Search & Filtering
- Dynamic UI
- API Integration

## Learning Method

For every topic, maintain the same pattern:

1. Explanation
2. Definition
3. Syntax / Example
4. Real-world connection
5. Hands-on task with code
6. Interview question
7. Common mistakes

This structure is kept consistent across learning notes, VS Code practice and GitHub documentation.

---

# 1. Component Structure

## Definition — English

Component structure means organizing a React application into small, focused and reusable components, where each component has a clear responsibility.

## Definition — Hinglish

Badi React application ko chhote components mein divide karna, aur har component ko ek specific responsibility dena component structure hai.

## Explanation

Typical structure:

```text
src/
├── components/
│   ├── CountryList.jsx
│   └── CountryCard.jsx
└── pages/
    └── CountryRelatedProject.jsx
```

Typical responsibilities:

- Page/Main component → API call + state
- List component → map/list rendering
- Card component → single item UI

## Example

```jsx
function ProductCard({ product }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>₹{product.price}</p>
    </div>
  );
}
```

## Real-world Connection

E-commerce, dashboards and job portals commonly separate pages, lists, cards, forms and navigation into different components.

## Interview Question

**Q: Why do we split a React application into components?**

**Answer:** To keep the UI modular, reusable, maintainable and easier to test.

## Common Mistake

Putting the complete application UI, API logic and every rendering responsibility into one very large component.

---

# 2. Reusable Components

## Definition — English

A reusable component is a component created once and used multiple times with different props or data.

## Definition — Hinglish

Ek component ko ek baar bana ke different data/props ke saath multiple places par use karna reusable component hai.

## Example

```jsx
function Button({ text }) {
  return <button>{text}</button>;
}

function App() {
  return (
    <>
      <Button text="Login" />
      <Button text="Register" />
      <Button text="Buy Now" />
      <Button text="Add to Cart" />
    </>
  );
}
```

## Real-world Connection

A single ProductCard component can display hundreds of products with different product data.

## Hands-on

Created reusable components using props and practiced passing different values into the same component.

## Interview Question

**Q: Why are reusable components important?**

**Answer:** They reduce code duplication and make the application easier to maintain and reuse.

## Common Mistakes

- Duplicating the same JSX instead of creating a reusable component
- Hard-coding values that should come from props
- Making a component responsible for too many unrelated tasks

---

# 3. Parent → Child Communication

## Definition — English

React commonly passes data from a parent component to a child component through props.

## Definition — Hinglish

Parent component se child component ko data bhejne ke liye props use hote hain.

## Example

```jsx
function App() {
  const name = "Adil";
  const age = 25;

  return <User name={name} age={age} />;
}

function User({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
```

## Function as Prop

```jsx
function App() {
  function handleMessage() {
    alert("Hello from Parent!");
  }

  return <Child onMessage={handleMessage} />;
}

function Child({ onMessage }) {
  return <button onClick={onMessage}>Click Me</button>;
}
```

## Real-world Connection

A parent page can pass product information to ProductCard, or a parent dashboard can pass user information to a UserCard.

## Interview Question

**Q: How can a child communicate with a parent in React?**

**Answer:** The parent can pass a callback function as a prop, and the child can call that function.

## Common Mistake

Saying that the child directly sends data to the parent without using a parent-provided callback or another state-management mechanism.

---

# 4. Search & Filtering

## Definition — English

Search and filtering means deriving a subset of data based on user input or selected conditions.

## Definition — Hinglish

User ke search input ke basis par existing data mein se matching items ko `filter()` se select karna search/filtering hai.

## Core Flow

```text
Input
  ↓
onChange
  ↓
useState
  ↓
filter()
  ↓
map()
  ↓
UI
```

## Example

```jsx
const names = ["Adil", "Rahul", "Aman", "Ahmed"];
const search = "ad";

const result = names.filter((name) =>
  name.toLowerCase().includes(search.toLowerCase())
);
```

## Real-world Example

Employee directory search:

```jsx
const filteredemp = employees.filter((employee) => {
  const searchTerm = search.toLowerCase();

  return (
    employee.name.toLowerCase().includes(searchTerm) ||
    employee.role.toLowerCase().includes(searchTerm)
  );
});
```

## Hands-on Completed

The employee search task supported:

- Search by name OR role
- Display name
- Display role
- Display salary
- Empty search → all employees
- No match → `No employees found`
- Stable key using employee `id`

## Interview Question

**Q: Why don't we store filtered data separately in state?**

**Answer:** Filtered data is derived from the original data and search state, so it can normally be calculated directly instead of maintaining duplicate state.

## Common Mistakes

- Forgetting to update search state in `onChange`
- Case-sensitive search when case-insensitive search is expected
- Mutating the original array
- Storing derived filtered data unnecessarily in state
- Using array index as a key when a stable unique ID is available

---

# 5. Dynamic UI

## Definition — English

Dynamic UI means the rendered interface changes automatically when application state or data changes.

## Definition — Hinglish

React state/value change hone par UI automatically update hoti hai; isko dynamic UI kehte hain.

## Core Flow

```text
User Action
    ↓
State Change
    ↓
React Re-render
    ↓
Updated UI
```

## Example — Status Toggle

```jsx
import { useState } from "react";

function CheckingStatus() {
  const [status, setStatus] = useState(false);

  return (
    <>
      {status ? <h1>Online</h1> : <h1>Offline</h1>}

      <button onClick={() => setStatus(!status)}>
        {status ? "Go Offline" : "Go Online"}
      </button>
    </>
  );
}

export default CheckingStatus;
```

## Other Dynamic UI Patterns

### Show / Hide

```jsx
{isVisible && <p>Hello</p>}
```

### If / Else with ternary

```jsx
{isLoggedIn ? <p>Dashboard</p> : <p>Login</p>}
```

### Dynamic text

```jsx
<button>
  {isActive ? "Deactivate" : "Activate"}
</button>
```

## Real-world Connection

Dynamic UI is used in login/logout buttons, online/offline status, cart counters, likes, notifications, tabs, filters and product availability.

## Hands-on Completed

Implemented an Online/Offline status toggle using `useState`, `onClick`, conditional rendering and dynamic button text.

## Interview Question

**Q: How does state create dynamic UI in React?**

**Answer:** An event or action updates state, React re-renders the component, and the UI reflects the new state value.

## Common Mistakes

- Updating the DOM manually instead of state
- Forgetting to use the state value in the JSX
- Using `onClick={handler()}` when a function reference/callback is required

---

# 6. API Integration

## Definition — English

API integration is the process of requesting external data from an API, converting the response, storing it in React state and rendering it in the UI.

## Definition — Hinglish

API se data fetch karna, response ko JSON mein convert karna, state mein store karna aur UI mein display karna API integration hai.

## API Flow

```text
Component Render
      ↓
useEffect
      ↓
fetch()
      ↓
API Request
      ↓
response.ok
      ↓
response.json()
      ↓
setState()
      ↓
State Update
      ↓
Component Re-render
      ↓
API Data → UI
```

## Real-world Example

User management screen API se users fetch karke name, email aur city display kar sakti hai.

## Hands-on Task — Users API

API used:

```text
https://jsonplaceholder.typicode.com/users
```

Completed implementation:

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("failed to fetch the data");
        }

        return response.json();
      })
      .then((converteddata) => {
        console.log(converteddata);
        setUsers(converteddata);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong: {error}</h1>;
  }

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <p>User ID: {user.id}</p>
          <h1>User Name: {user.name}</h1>
          <h1>User Email: {user.email}</h1>
          <p>City: {user.address.city}</p>
        </div>
      ))}
    </>
  );
}

export default Users;
```

## Important API Concepts

- `fetch()` sends the request
- `response.ok` checks HTTP success status
- `response.json()` converts the response body to JavaScript data
- `setUsers()` stores API data in state
- `.catch()` handles rejected requests/errors
- `.finally()` runs after success or failure
- `loading` and `error` states control the UI

## Interview Questions

**Q: Why do we use `useEffect` for API calls?**

**Answer:** API requests are side effects because they interact with an external system, so `useEffect` is commonly used to perform them after rendering according to its dependency array.

**Q: What is the purpose of `response.ok`?**

**Answer:** It indicates whether the HTTP response status is in the successful range. We can throw an error when it is false.

**Q: What is the purpose of `response.json()`?**

**Answer:** It parses the response body as JSON and returns the resulting JavaScript value.

## Common Mistakes

- Forgetting `response.json()`
- Not checking `response.ok`
- Forgetting the `[]` dependency array when the request should happen on mount only
- Rendering API data before handling loading/empty states
- Not handling errors
- Using incorrect property paths from nested API objects

---

# Day 6 Hands-on Summary

## Completed Practice

1. Component structure
2. Reusable components
3. Parent → child props
4. Callback/function as prop
5. Employee search by name OR role
6. Empty search handling
7. No-results handling
8. Dynamic Online/Offline UI
9. API fetching with `fetch()`
10. `response.ok`
11. `response.json()`
12. Loading state
13. Error state
14. `.catch()`
15. `.finally()`
16. Dynamic API rendering with `map()`

## Day 6 Status

**COMPLETED ✅**

## Phase 2 Status

- Component Structure — COMPLETED ✅
- Reusable Components — COMPLETED ✅
- Parent → Child Communication — COMPLETED ✅
- Search & Filtering — COMPLETED ✅
- Dynamic UI — COMPLETED ✅
- API Integration — COMPLETED ✅
- Responsive UI — NEXT ⏳
- Tailwind CSS — PENDING ⏳

## GitHub Learning Record

Daily note location:

```text
React-Learning/daily-learning/day-06.md
```

Topic notes should continue under:

```text
React-Learning/important-topics/
```

Interview notes should continue under:

```text
React-Learning/important-questions/
React-Learning/interview-preparation/
```

The same concept → definition → example → real-world → hands-on → interview structure is maintained across VS Code, browser notes and GitHub.

## Next

**Day 7 / Next Phase 2 topic: Responsive UI → Bootstrap responsive layouts → Tailwind CSS.**
