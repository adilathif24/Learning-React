function ColorSelector({ color, setColor }) {
  const colors = ["Black", "White", "Blue"];
  return (
    <div>
      <h6 className="fw-bold">Select Color</h6>
      <div className="d-flex gap-2 flex-wrap">
        {colors.map((item) => (
          <button key={item} className={`btn ${color === item ? "btn-dark" : "btn-outline-secondary"}`} onClick={() => setColor(item)}>{item}</button>
        ))}
      </div>
    </div>
  );
}
export default ColorSelector;
