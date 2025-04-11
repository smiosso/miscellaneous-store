import { Link } from "react-router-dom"; // Importando o Link do React Router
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.navLogo}>
        <img style={styles.logo} src="/shopping.png" alt="Logo" />
        <h1> Miscellaneous Store</h1>
      </div>
      <ul style={styles.navList}>
        <li>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li>
          <Link to="/products" style={styles.navLink}>Products</Link> 
        </li>
        <li>
          <Link to="/cart" style={styles.navLink}>
            Cart
            <FontAwesomeIcon icon={faCartShopping} style={styles.icon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#262626",
    color: "#fff",
  },
  navLogo: {
    display: "flex",
    alignItems: "center",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
  },
  icon: {
    marginLeft: "8px",
  },
  logo: {
    width: "55px",
    marginRight: "8px",
  }
};

export default Navbar;
