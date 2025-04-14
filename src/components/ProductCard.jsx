import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Impede que o clique no botão acione a navegação
    console.log(`🛒 Added to cart: ${product.title}`);
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
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
