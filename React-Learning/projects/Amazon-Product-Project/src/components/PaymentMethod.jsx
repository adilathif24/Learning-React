function PaymentMethod({ payment, setPayment }) {
  const methods = ["Cash on Delivery", "UPI", "Card"];
  return (
    <div>
      <h6 className="fw-bold">Payment Method</h6>
      <div className="d-flex gap-2 flex-wrap">
        {methods.map((method) => (
          <button key={method} className={`btn ${payment === method ? "btn-success" : "btn-outline-success"}`} onClick={() => setPayment(method)}>{method}</button>
        ))}
      </div>
    </div>
  );
}
export default PaymentMethod;
