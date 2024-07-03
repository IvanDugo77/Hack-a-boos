import products from "../data/products.json";
import ProductCard from "./ProductCard";

// Componenete lista de productos.
// El map devuelve una lista de componentes ProductCard
// El componente utiliza a su vez componentes (HeaderSection, ProductCard)
function Products() {
  return (
    <section className="products">
      <ul className="productos">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </ul>
    </section>
  );
}

export default Products;
