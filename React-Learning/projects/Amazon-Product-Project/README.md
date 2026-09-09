# Amazon Product Project

A separate React + Bootstrap e-commerce product page built as hands-on practice.

## Public GitHub Project

This project is kept in its own folder and is **not part of Day-01, Day-02, or Day-03**.

[Open Amazon Product Project on GitHub](https://github.com/adilathif24/Learning-React/tree/main/React-Learning/projects/Amazon-Product-Project)

## Local Website URL

```text
http://localhost:5178/
```

### What does `localhost:5178` mean?

- `localhost` = your own computer.
- `5178` = the port where the Vite development server is running.
- `/` = the root/home page of this React application.
- This URL works only while the local Vite server is running.

Start the project with:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:5178/
```

> The port can change if another Vite app is already using 5178. Always use the URL shown by `npm run dev` in your terminal.

## Project Purpose

This project uses React concepts through a realistic product-shopping experience instead of isolated examples.

## React Concepts Practiced

- `useState`
- Props
- Functional components
- Component-based architecture
- Event handling
- Conditional rendering
- `map()` for product options
- State-driven UI
- Cart interaction
- Reusable components

## Features

- Premium product detail page
- Product image and gallery area
- Product information and pricing
- Size selection: S, M, L, XL
- Color selection
- Quantity controls
- Payment method selection
- Add to Cart
- Buy Now
- Order summary
- Cart section
- Responsive Bootstrap layout
- Custom premium CSS styling

## Tech Stack

- React
- JavaScript
- Vite
- Bootstrap
- CSS

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

## Main React Code

The main application keeps the product state in `App.jsx` and passes state/data to reusable child components through props.

```jsx
const [size, setSize] = useState("M");
const [color, setColor] = useState("Black");
const [quantity, setQuantity] = useState(1);
const [payment, setPayment] = useState("Cash on Delivery");
const [cart, setCart] = useState([]);

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

### Component + Props Example

```jsx
<ProductInfo
  name={productName}
  price={productPrice}
/>

<SizeSelector
  size={size}
  setSize={setSize}
/>

<ColorSelector
  color={color}
  setColor={setColor}
/>
```

### Quantity Example

```jsx
<QuantityControl
  quantity={quantity}
  setQuantity={setQuantity}
/>
```

The parent component owns the state, while child components receive the current value and setter function through props.

## Learning Outcome

This project connects the React concepts learned so far into one practical application:

`useState` + `Props` + `Events` + `map()` + `Conditional Rendering` + `Reusable Components` + `Cart State`

## Important

This is a learning/portfolio project and is not affiliated with Amazon.
