function QuantityControl({ quantity, setQuantity }) {
  const decrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  return (
    <div>
      <h6 className="fw-bold">Quantity</h6>
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-dark" onClick={decrease}>-</button>
        <span className="fw-bold px-3">{quantity}</span>
        <button className="btn btn-dark" onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
    </div>
  );
}
export default QuantityControl;
