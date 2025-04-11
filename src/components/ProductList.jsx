import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]); // Stores the list of products
  const [loading, setLoading] = useState(true); // Indicates whether data is still loading

  useEffect(() => {
    // Fetch products from the FakeStore API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json()) // Convert response to JSON format
      .then((data) => {
        setProducts(data); // Update state with fetched products
        setLoading(false); // Set loading to false once data is ready
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []); // Empty dependency array ensures this runs only once on page load

  return (
    <div style={styles.list}>
      {loading ? (
        <p>Don't rush...take it easy</p> // Display loading message while data is being fetched
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

const styles = {
  list: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "20px",
  }
};

export default ProductList;
