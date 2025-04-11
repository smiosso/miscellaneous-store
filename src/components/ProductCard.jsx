import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false); // Hover State

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button 
        style={hovered ? styles.buttonHovered : styles.button} // change style if hovered
        onMouseEnter={() => setHovered(true)} // hover active
        onMouseLeave={() => setHovered(false)} // hover inactive
      >
        Add to Cart
        <FontAwesomeIcon icon={faCartShopping} style={styles.icon} />
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
    width: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  button: {
    backgroundColor: "#262626",
    color: "white",
    padding: "8px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonHovered: {
    backgroundColor: "#FFC215",
    color: "white",
    padding: "8px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  icon: {
    marginLeft: "8px",
  },
};

export default ProductCard;
