# Day 8 — React Routing

## Topic
React Routing with React Router DOM + Product Gallery Routing Practice

## Definition
React Routing is the process of displaying different React components for different URL paths in a Single Page Application (SPA), without performing a full browser page reload.

## Hinglish Explanation
React normally ek hi HTML page par application run karta hai. Routing ki help se hum URL ke basis par different components/pages show kar sakte hain.

Example:

- `/` → Home page
- `/product` → Product page
- `/searchbar` → SearchBar page
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

# Part A — Core Routing Concepts

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

### Important Point
`BrowserRouter` should wrap the part of the application that uses React Router components and hooks.

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

# Part B — Today's Product Gallery Routing Practice

## Practice Overview

Today I created a small Product Gallery React application to practice routing. The application contains:

- Home page
- Product page
- SearchBar page
- About page
- Navigation using `Link`
- Route definitions using `Routes` and `Route`
- BrowserRouter in `main.jsx`
- Product list rendering using `map()`
- Search input using `useState`

## Project Flow

```text
main.jsx
   ↓
BrowserRouter
   ↓
App.jsx
   ↓
Routes + Route
   ↓
URL
   ↓
Home / Product / SearchBar / About
```

## 8. About Component

### Code practiced

```jsx
function About(){
  return <p>
    Product Gallery is an e-commerce frontend
    built using React.
  </p>
}

export default About;
```

### Explanation

`About` is a functional React component. It returns a paragraph describing the Product Gallery application.

- `function About()` → creates the component.
- `return` → returns the UI.
- `export default About` → makes the component available for import in another file.

### Important concept

A component can be kept in its own file and imported into `App.jsx`. This helps keep the application organized and reusable.

## 9. App.jsx — Routing Setup

### Code practiced

```jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Product from './Product.jsx';
import SearchBar from './SearchBar.jsx';
import About from './About.jsx';

function App(){
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link> |
        <Link to='/product'> Product</Link> |
        <Link to='/searchbar'> SearchBar</Link> |
        <Link to='/about'>About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/searchbar' element={<SearchBar/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

      <h1>Route is used to define and connect with url</h1>
      <h1>Routes is used to group multiple Route</h1>
      <h1>Link is used to Navigate from one Route to another</h1>
    </div>
  )
}

export default App;
```

### Proper Explanation

`App.jsx` is the main routing configuration in this practice.

### Import section

```jsx
import { Routes, Route, Link } from 'react-router-dom';
```

- `Routes` → groups route definitions.
- `Route` → connects a URL path to a component.
- `Link` → navigates between routes.

### Navigation section

```jsx
<Link to='/'>Home</Link>
<Link to='/product'>Product</Link>
<Link to='/searchbar'>SearchBar</Link>
<Link to='/about'>About</Link>
```

The `to` value should match the route path.

Example:

```text
Link to='/product'
        ↓
Route path='/product'
        ↓
<Product />
```

### Routes section

```jsx
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/product' element={<Product/>}/>
  <Route path='/searchbar' element={<SearchBar/>}/>
  <Route path='/about' element={<About/>}/>
</Routes>
```

This tells React Router which component to render for each URL.

### Interview point

A simple way to remember:

- `Route` → defines one route.
- `Routes` → groups multiple routes.
- `Link` → navigates to a route.

## 10. Home.jsx

### Code practiced

```jsx
// Product Gallery
// Discover amazing products

// [ View Products ]
function Home(){
  return (
    <>
      <p>Product Gallery</p>
      <p>Discover amazing products</p>
      <button>View Products</button>
    </>
  )
}

export default Home;
```

### Explanation

The `Home` component displays the application title, description and a View Products button.

### Important observation

In the current practice code, the `View Products` button does not navigate anywhere because no `onClick` or `useNavigate()` has been connected to it yet.

A routing-enabled version can later use:

```jsx
import { useNavigate } from 'react-router-dom';

function Home(){
  const navigate = useNavigate();

  return (
    <>
      <p>Product Gallery</p>
      <p>Discover amazing products</p>
      <button onClick={() => navigate('/product')}>
        View Products
      </button>
    </>
  )
}
```

This demonstrates the difference between a normal button and programmatic navigation using `useNavigate()`.

## 11. main.jsx — BrowserRouter

### Code practiced

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
```

### Explanation

`main.jsx` is the entry point of the React application.

The important part is:

```jsx
<BrowserRouter>
  <App/>
</BrowserRouter>
```

This gives the routing system the browser URL/history context required by `Routes`, `Route`, `Link`, and routing hooks.

## 12. Product.jsx — Rendering Products with map()

### Code practiced

```jsx
import React from 'react';

function Product() {
  let products = [
    { id: 101, name: 'Samsung', price: '₹70,000' },
    { id: 102, name: 'Flip', price: '₹7,50,000' },
    { id: 103, name: 'Iphone', price: '₹80,000' }
  ];

  console.log(products);

  return (
    <div className="container mt-3">
      <h1>Product List:</h1>
      {products.map((p) => {
        return (
          <div key={p.id} className="mb-3 p-3 border rounded">
            <h2>Name : {p.name}</h2>
            <h3>Price : {p.price}</h3>
            <button className="btn btn-success">View</button>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
```

### Proper Explanation

The Product component contains an array of product objects and renders each product dynamically using `map()`.

Each product contains:

```text
id
name
price
```

### `map()` flow

```text
products array
      ↓
products.map()
      ↓
One product object (p)
      ↓
p.name / p.price / p.id
      ↓
Product card UI
```

### Why `key={p.id}`?

React needs a stable key when rendering a list. Here the product ID is used as the key.

### Bootstrap classes

- `container` → Bootstrap container.
- `mt-3` → margin-top.
- `mb-3` → margin-bottom.
- `p-3` → padding.
- `border` → border.
- `rounded` → rounded corners.
- `btn btn-success` → Bootstrap success button.

### Important observation

The current `View` button is only UI. It does not yet navigate to a product details route. Dynamic routing can be added later using `/product/:id` and `Link` or `useNavigate()`.

## 13. SearchBar.jsx — useState Practice

### Code practiced

```jsx
import {useState} from 'react'

function SearchBar(){
  let [search,setSearch]=useState('');

  return (
    <>
      <p>Search Products</p>
      <input
        type='text'
        placeholder='search for product'
        onChange={(e)=>{
          setSearch(e.target.value);
        }}
      />
      <p>
        Results will appear here : <strong>{search}</strong>
      </p>
    </>
  )
}

export default SearchBar;
```

### Proper Explanation

This component demonstrates a controlled-style input pattern using state.

```jsx
let [search,setSearch]=useState('');
```

- `search` → stores the current input value.
- `setSearch` → updates the state.
- `useState('')` → initial value is an empty string.

When the user types:

```jsx
onChange={(e) => {
  setSearch(e.target.value);
}}
```

Flow:

```text
User types
   ↓
onChange
   ↓
e.target.value
   ↓
setSearch()
   ↓
search state updates
   ↓
UI re-renders
```

### Important observation

The current SearchBar displays the typed text. It does not yet filter the product array. Actual product filtering can be connected later using `filter()` + `map()`.

# Part C — Complete Product Gallery Routing Flow

```text
Browser URL
    ↓
BrowserRouter
    ↓
Routes
    ↓
Route matching
    ↓
Component rendering

Navigation:

Link → URL change → Matching Route → Component

Button + useNavigate → navigate('/product') → Matching Route → Product

Dynamic product later:

/products/101
    ↓
/product/:id
    ↓
useParams()
    ↓
id = 101
    ↓
Product Details
```

# Hands-on Task

Extend today's Product Gallery:

1. Keep Home, Product, SearchBar and About routes.
2. Add `NavLink` to the navbar.
3. Make `View Products` navigate to `/product`.
4. Make each product's `View` button/link open `/product/:id`.
5. Create `ProductDetails.jsx`.
6. Use `useParams()` to read the product ID.
7. Later connect that ID to product data/API.

# Interview Questions

### Q1. What is React Router?

React Router is a routing library used to manage client-side navigation and route-based component rendering in React applications.

### Q2. What is BrowserRouter?

`BrowserRouter` connects React Router with the browser's URL/history system and enables routing based on browser paths.

### Q3. Difference between Link and NavLink?

`Link` provides navigation. `NavLink` also provides active-route information, making it useful for navigation menus.

### Q4. What is useNavigate()?

`useNavigate()` is a hook used to navigate programmatically based on application logic.

### Q5. What is a dynamic route?

A dynamic route contains a variable URL parameter, such as `/product/:id`.

### Q6. How do you read a dynamic route parameter?

Use `useParams()` from React Router.

### Q7. Why do we use key={p.id} while mapping products?

A stable key helps React identify list items when rendering and updating a collection.

### Q8. What is the difference between Routes and Route?

`Route` defines an individual path and element. `Routes` groups route definitions and renders the matching route.

# Situation-Based Interview Questions

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

Use a dynamic route such as `/product/:id` and navigate using the product ID.

```jsx
<Link to={`/product/${product.id}`}>
  View Details
</Link>
```

### Situation 3
The navbar should show which page is currently active.

Answer:

Use `NavLink` because it provides active-route information that can be used for styling.

### Situation 4
The Home page has a View Products button and clicking it should open the Product page.

Answer:

Use `useNavigate()` for programmatic navigation, or use a `Link` styled as a button.

# Common Mistakes

- Forgetting to install `react-router-dom`
- Forgetting to wrap the application with `BrowserRouter`
- Importing `Route`/`Routes` from the wrong package
- Using `<a href>` when SPA navigation with `Link` is intended
- Link path and Route path not matching
- Using `useNavigate()` outside a Router context
- Defining `/product/:id` but forgetting to use `useParams()`
- Using the wrong parameter name between the route and `useParams()`
- Forgetting `key={p.id}` when rendering products with `map()`
- Expecting the current SearchBar code to filter products automatically; it currently only displays the typed text
- Expecting the current Home/Product `button` elements to navigate automatically; navigation logic still needs to be connected

# Day 8 Quick Revision

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

Product Gallery practice:
Home → Product → SearchBar → About
              ↓
        Dynamic route later
          /product/:id
```

# Day 8 Status

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
- Product Gallery routing practice
- Home component
- Product component with `map()`
- SearchBar with `useState`
- About component
- Routing interview preparation
- Situation-based routing questions
