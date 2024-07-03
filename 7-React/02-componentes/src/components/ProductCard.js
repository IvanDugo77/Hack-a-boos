// Componente producto. Recibe por props el objeto producto con todos sus propriedades
function ProductCard({ product }) {
  return (
    <li className="product">
      <h3 title={product.title}>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <div>{product.category}</div>
      <div>{product.price}€</div>
      {/* <span className="destacado">
          {product.rating.count >= 400 ? "Destacado" : ""}
          {product.rating.count >= 400 ? "Destacado" : null}
          {product.rating.count >= 400 && "Destacado"}
        </span> */}
      {product.rating.count >= 400 && <span className="destacado"></span>}
    </li>
  );
}

export default ProductCard;
