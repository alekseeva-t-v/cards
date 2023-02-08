function Card({ img, children }) {
  return (
    <div className="card">
      {img}
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
