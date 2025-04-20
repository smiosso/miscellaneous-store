import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';


const Home = () => {
  return (
    <div className="p-4">
      <section className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to Miscellaneous Store 🛍️</h1>
        <p className="text-gray-600">Find everything you might not need... but want!</p>
      </section>

      <section className="mb-12 bg-indigo-100 p-6 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-2">🎉 Spring Sale!</h2>
        <p className="mb-4">Up to 50% off selected items. Limited time only!</p>
        <Link to="/products">
          <button className="bg-black text-white py-2 px-6 rounded hover:bg-indigo-900">
            Shop Now
          </button>
        </Link>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Featured Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Link to="/category/men's clothing">
          <div className="bg-gray-200 p-6 rounded-lg text-center cursor-pointer hover:bg-gray-300">
            👕 Men's Clothing
          </div>
        </Link>
        <Link to="/category/women's clothing">
          <div className="bg-gray-200 p-6 rounded-lg text-center cursor-pointer hover:bg-gray-300">
            👚 Women's Clothing
          </div>
        </Link>
        <Link to="/category/jewelery">
          <div className="bg-gray-200 p-6 rounded-lg text-center cursor-pointer hover:bg-gray-300">
            💍 Jewelry
          </div>
        </Link>
        <Link to="/category/electronics">
          <div className="bg-gray-200 p-6 rounded-lg text-center cursor-pointer hover:bg-gray-300">
            📱 Electronics
          </div>
        </Link>

        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4">All Products</h2>
          <ProductList />
      </section>

    </div>
  );
};

export default Home;
