function OrderSummary({ name, price, size, color, quantity, payment }) {
  return (
    <div className="border rounded-3 p-3">
      <p><strong>Product:</strong> {name}</p>
      <p><strong>Size:</strong> {size}</p>
      <p><strong>Color:</strong> {color}</p>
      <p><strong>Quantity:</strong> {quantity}</p>
      <p><strong>Payment:</strong> {payment}</p>
      <h5>Total: Rs. {price * quantity}</h5>
    </div>
  );
}
export default OrderSummary;
