function Cart({ cart, setCart }) {
  if (cart.length === 0) return <p className="text-muted">Your cart is empty.</p>;

  return (
    <div>
      {cart.map((item, index) => (
        <div key={index} className="border rounded-3 p-3 mb-2">
          <div className="d-flex justify-content-between">
            <strong>{item.name}</strong>
            <button className="btn btn-sm btn-outline-danger" onClick={() => setCart(cart.filter((_, i) => i !== index))}>Remove</button>
          </div>
          <small>Size {item.size} | {item.color} | Qty {item.quantity}</small>
        </div>
      ))}
    </div>
  );
}
export default Cart;
