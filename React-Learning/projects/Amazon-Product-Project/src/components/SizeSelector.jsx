function SizeSelector({ size, setSize }) {
  const sizes = ["S", "M", "L", "XL"];
  return (
    <div>
      <h6 className="fw-bold">Select Size</h6>
      <div className="d-flex gap-2 flex-wrap">
        {sizes.map((item) => (
          <button key={item} className={`btn ${size === item ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setSize(item)}>{item}</button>
        ))}
      </div>
    </div>
  );
}
export default SizeSelector;
