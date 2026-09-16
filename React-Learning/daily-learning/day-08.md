# Day 8 — React Routing

## Topic
React Routing with React Router DOM

## Definition
React Routing is the process of displaying different React components for different URL paths in a Single Page Application (SPA), without performing a full browser page reload.

## Hinglish Explanation
React normally ek hi HTML page par application run karta hai. Routing ki help se hum URL ke basis par different components/pages show kar sakte hain.

Example:

- `/` → Home page
- `/product` → Product page
- `/about` → About page

React Router URL ko match karta hai aur matching component ko render karta hai.

## Why Routing is Needed

Without routing, application mein multiple pages ko URL ke saath manage karna difficult ho jata hai.

Routing helps with:

- Multiple pages/views in an SPA
- URL-based navigation
- Browser back/forward navigation
- Navigation without full page reload
- Dynamic URLs
- Programmatic navigation

## Package

Install React Router DOM:

```bash
npm install react-router-dom
```

## 1. BrowserRouter

### Definition
`BrowserRouter` React application ko browser URL aur history system ke saath connect karta hai.

### Example

```jsx
import { BrowserRouter } from "react-router-dom";

function main() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
```

In a Vite app, normally this is placed in `main.jsx`:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

## 2. Routes and Route

### Definition
`Routes` contains the route definitions, while `Route` connects a URL path with a React component.

### Example

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
```

Flow:

`URL → Route matching → Component rendering`

## 3. Link

### Definition
`Link` is used to navigate between routes without a full browser page reload.

### Example

```jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/product">Go to Product</Link>
    </div>
  );
}

export default Home;
```

## 4. NavLink

### Definition
`NavLink` works like `Link`, but it can detect the active route. It is useful for navigation bars.

### Example

```jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product">Products</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default Navbar;
```

## Link vs NavLink

- `Link` → normal navigation
- `NavLink` → navigation + active route information

## 5. useNavigate()

### Definition
`useNavigate()` is a React Router hook used for programmatic navigation from JavaScript logic.

### Example

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    // login logic
    navigate("/dashboard");
  }

  return <button onClick={handleLogin}>Login</button>;
}

export default Login;
```

### Real-world situations

- After successful login → dashboard
- After checkout → order confirmation
- After form submission → success page
- After logout → login page

## 6. Dynamic Routes

### Definition
Dynamic routes contain a URL parameter whose value can change.

Example:

- `/product/1`
- `/product/2`
- `/product/25`

### Route

```jsx
<Route path="/product/:id" element={<ProductDetails />} />
```

### Reading the parameter

```jsx
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return <h1>Product ID: {id}</h1>;
}

export default ProductDetails;
```

Flow:

`/product/25 → :id = 25 → useParams() → API request/UI`

## 7. SPA Navigation

### What happens?

When using React Router `Link`/`NavLink`, React Router changes the URL and renders the matching component without requesting a completely new HTML document from the server.

This gives the application a Single Page Application experience.

## 8. Complete Routing Example

### Folder structure

```text
src/
├── pages/
│   ├── Home.jsx
│   ├── Product.jsx
│   ├── About.jsx
│   └── ProductDetails.jsx
├── components/
│   └── Navbar.jsx
├── App.jsx
└── main.jsx
```

### main.jsx

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

### App.jsx

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
```

### Navbar.jsx

```jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> | {" "}
      <NavLink to="/product">Products</NavLink> | {" "}
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default Navbar;
```

## Hands-on Task

Create a small routing practice application with:

1. Home page at `/`
2. Products page at `/products`
3. About page at `/about`
4. Navbar using `NavLink`
5. Product details route `/products/:id`
6. Use `useParams()` to display the product ID
7. Add a button that uses `useNavigate()` to go to `/products`
8. Use `Link` for simple navigation

## Interview Questions

### Q1. What is React Router?

React Router is a routing library used to manage client-side navigation and route-based component rendering in React applications.

### Q2. What is BrowserRouter?

`BrowserRouter` connects React Router with the browser's URL/history system and enables routing based on browser paths.

### Q3. Difference between Link and NavLink?

`Link` provides navigation. `NavLink` also provides active-route information, making it useful for navigation menus.

### Q4. What is useNavigate()?

`useNavigate()` is a hook used to navigate programmatically based on application logic.

### Q5. What is a dynamic route?

A dynamic route contains a variable URL parameter, such as `/products/:id`.

### Q6. How do you read a dynamic route parameter?

Use `useParams()` from React Router.

## Situation-Based Interview Questions

### Situation 1
User successfully logs in. You need to send them to the dashboard.

Answer:

Use `useNavigate()` after successful authentication:

```jsx
const navigate = useNavigate();
navigate("/dashboard");
```

### Situation 2
You have a product list and clicking a product should open its details page.

Answer:

Use a dynamic route such as `/products/:id` and navigate with a `Link`:

```jsx
<Link to={`/products/${product.id}`}>
  View Details
</Link>
```

### Situation 3
The navbar should show which page is currently active.

Answer:

Use `NavLink` because it provides active-route state that can be used for styling.

## Common Mistakes

- Forgetting to install `react-router-dom`
- Forgetting to wrap the application with `BrowserRouter`
- Importing `Route`/`Routes` from the wrong package
- Using `<a href>` when SPA navigation with `Link` is intended
- Forgetting the leading `/` in a route path when needed
- Using `useNavigate()` outside a Router context
- Defining `/products/:id` but forgetting to use `useParams()`
- Using the wrong parameter name between the route and `useParams()`

## Day 8 Quick Revision

```text
BrowserRouter
     ↓
Routes
     ↓
Route
     ↓
URL matching
     ↓
React Component

Navigation:
Link → simple navigation
NavLink → navigation + active route
useNavigate → programmatic navigation
useParams → read dynamic URL parameters
```

## Day 8 Status

Completed:

- BrowserRouter
- Routes
- Route
- Link
- NavLink
- useNavigate()
- Dynamic routes
- useParams()
- SPA/client-side navigation
- Routing interview preparation
- Situation-based routing questions
