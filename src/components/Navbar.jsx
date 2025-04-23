import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from "react";

const Navbar = () => {
  const { cart } = useCart();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      // Redireciona para a página de busca com o termo na query string
      navigate(`/search?q=${encodeURIComponent(search)}`);
      setSearch(""); // opcional: limpa o input após buscar
    }
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
 
        <Link to="/" className="text-xl font-bold text-gray-800">
          Miscellaneous Store 🛍️
        </Link>

        {/* Right side: search, products, cart */}
        <div className="flex items-center gap-6 ml-auto">
          {/* search form */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Looking for something?"
              className="px-6 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-1 rounded-md hover:bg-indigo-600 transition"
            >
              🔍
            </button>
          </form>

          <Link to="/products" className="hover:underline">
            Products
          </Link>

          <Link to="/cart" className="text-gray-600 hover:underline">
            🛒 Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
