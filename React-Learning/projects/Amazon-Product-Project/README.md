# Amazon Product Project

A premium e-commerce product page built with **React, JavaScript, Vite, Bootstrap and CSS**.

## Project Overview

A responsive product-shopping interface that demonstrates practical React development through reusable components, state management and user interactions.

## Key Features

- Premium responsive product UI
- Product image gallery
- Product information and pricing
- Size selection: S, M, L, XL
- Color selection
- Quantity controls
- Payment method selection
- Add to Cart and Buy Now
- Order summary
- Cart management
- Responsive Bootstrap layout
- Custom CSS styling

## React Skills Demonstrated

- `useState` for product and cart state
- Props for parent-to-child data flow
- Functional components
- Reusable component architecture
- Event handling
- Conditional rendering
- `map()` for dynamic options
- State-driven UI updates

## Tech Stack

| Technology | Usage |
|---|---|
| React | UI and component architecture |
| JavaScript | Application logic and state |
| Vite | Development and build tooling |
| Bootstrap | Responsive layout and UI |
| CSS | Custom premium styling |

## Project Structure

```text
Amazon-Product-Project/
├── public/
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── CartSummary.jsx
│   │   ├── ColorSelector.jsx
│   │   ├── OrderSummary.jsx
│   │   ├── PaymentMethod.jsx
│   │   ├── ProductInfo.jsx
│   │   ├── QuantityControl.jsx
│   │   └── SizeSelector.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## State Management Example

```jsx
const [size, setSize] = useState("M");
const [color, setColor] = useState("Black");
const [quantity, setQuantity] = useState(1);
const [payment, setPayment] = useState("Cash on Delivery");
const [cart, setCart] = useState([]);
```

## Cart Logic

```jsx
const addToCart = () => {
  const product = {
    name: productName,
    price: productPrice,
    size,
    color,
    quantity,
    payment,
  };

  setCart([...cart, product]);
};
```

## Component Communication

```jsx
<ProductInfo name={productName} price={productPrice} />

<SizeSelector
  size={size}
  setSize={setSize}
/>

<ColorSelector
  color={color}
  setColor={setColor}
/>

<QuantityControl
  quantity={quantity}
  setQuantity={setQuantity}
/>
```

The parent component manages the application state and passes values and setter functions to reusable child components through props.

## Run Locally

```bash
npm install
npm run dev
```

The Vite terminal output provides the local development URL.

## Project Status

**Completed — React Front-End Project**

This project is maintained as a standalone portfolio project inside the React learning repository.