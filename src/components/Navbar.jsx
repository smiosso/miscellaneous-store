import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Miscellaneous Store
        </Link>
        <Link to="/products" className="hover:underline">
            Products
          </Link>
        <Link to="/cart" className="text-gray-600">
          🛒 Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;