import { useState } from "react";
import ProductInfo from "./components/ProductInfo";
import SizeSelector from "./components/SizeSelector";
import ColorSelector from "./components/ColorSelector";
import QuantityControl from "./components/QuantityControl";
import CartSummary from "./components/CartSummary";
import PaymentMethod from "./components/PaymentMethod";
import OrderSummary from "./components/OrderSummary";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const productName = "Men's Premium Casual Shirt";
  const productPrice = 499;
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const [payment, setPayment] = useState("Cash on Delivery");
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart([...cart, { name: productName, price: productPrice, size, color, quantity, payment }]);
  };

  return (
    <div className="store-page">
      <nav className="navbar premium-navbar">
        <div className="container">
          <span className="navbar-brand fw-bold fs-3">SHOP<span>HUB</span></span>
          <div className="d-flex gap-3 align-items-center">
            <span className="nav-item-text">Men</span><span className="nav-item-text">Women</span><span className="nav-item-text">Deals</span>
            <button className="cart-top-btn">Cart {cart.length > 0 && `(${cart.length})`}</button>
          </div>
        </div>
      </nav>

      <main className="container py-5">
        <div className="product-shell">
          <div className="row g-0">
            <div className="col-lg-6 product-gallery">
              <div className="gallery-badge">BEST SELLER</div>
              <div className="image-container">
                <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR9RbB486AVClGu_b1mui0IWEjcNjnOB1c-g6CFWFhwK3NaiHTF8p9m4oJylVqE3ElHPVhlYBK_dGO5_Lil1mC7qX6ZWQqwMg" alt="Men's Premium Casual Shirt" />
              </div>
            </div>

            <div className="col-lg-6 product-details">
              <div className="small-label">PREMIUM COLLECTION</div>
              <ProductInfo name={productName} price={productPrice} />
              <div className="offer-box"><strong>Limited Time Offer</strong> - Extra 10% off on selected payments</div>
              <div className="detail-section"><SizeSelector size={size} setSize={setSize} /></div>
              <div className="detail-section"><ColorSelector color={color} setColor={setColor} /></div>
              <div className="detail-section"><QuantityControl quantity={quantity} setQuantity={setQuantity} /></div>
              <CartSummary quantity={quantity} price={productPrice} />
              <div className="delivery-box"><div><strong>Free Delivery</strong><p>Available on this product</p></div><div><strong>Easy Returns</strong><p>7 days return policy</p></div></div>
              <PaymentMethod payment={payment} setPayment={setPayment} />
              <div className="action-buttons">
                <button className="add-cart-btn" onClick={addToCart}>ADD TO CART</button>
                <button className="buy-now-btn" onClick={addToCart}>BUY NOW</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-lg-8"><div className="premium-section"><h4>Order Summary</h4><OrderSummary name={productName} price={productPrice} size={size} color={color} quantity={quantity} payment={payment} /></div></div>
          <div className="col-lg-4"><div className="premium-section"><h4>Your Cart</h4><Cart cart={cart} setCart={setCart} /></div></div>
        </div>
      </main>

      <footer className="premium-footer"><div className="container text-center"><h4>SHOPHUB</h4><p>Premium shopping experience built with React.</p><small>React + JavaScript + Bootstrap</small></div></footer>
    </div>
  );
}

export default App;
