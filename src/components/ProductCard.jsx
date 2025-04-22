// src/components/ProductCard.jsx
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300 flex flex-col justify-between"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text-md font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 font-bold mb-4">${product.price}</p>

      <div className="mt-auto">
        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white py-2 px-4 rounded-xl hover:bg-indigo-900 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
