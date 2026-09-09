function ProductInfo({ name, price }) {
  return (
    <div className="mb-4">
      <h2 className="fw-bold mb-2">{name}</h2>
      <div className="rating-stars mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <span className="star" key={star}>{star}</span>
        ))}
        <span className="text-muted ms-2">(1,245 reviews)</span>
      </div>
      <h3 className="fw-bold">Rs. {price}</h3>
      <p className="text-success mb-0">FREE delivery available</p>
    </div>
  );
}
export default ProductInfo;
