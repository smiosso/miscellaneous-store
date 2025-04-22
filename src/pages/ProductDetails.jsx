import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto mt-30">
      <div className="flex flex-col md:flex-row gap-4">
        <img src={product.image} alt={product.title} className="h-64 object-contain" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4 text-indigo-700">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white py-2 px-6 rounded hover:bg-indigo-900"
          >
            Add to Cart
          </button>
          <button
            onClick={() => navigate('/products')}
            className="bg-zinc-600 text-white py-2 px-6 rounded hover:bg-indigo-900 ml-8"
          >
            Keep shopping
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;