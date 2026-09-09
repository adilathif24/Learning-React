function CartSummary({ quantity, price }) {
  return (
    <div className="border rounded-3 p-3 my-3">
      <div className="d-flex justify-content-between"><span>Total Items</span><strong>{quantity}</strong></div>
      <div className="d-flex justify-content-between"><span>Total Price</span><strong>Rs. {quantity * price}</strong></div>
    </div>
  );
}
export default CartSummary;
