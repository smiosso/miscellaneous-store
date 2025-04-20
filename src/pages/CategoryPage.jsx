import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        const productsInCategory = data.filter(
          (product) => product.category === category
        );
        setFilteredProducts(productsInCategory);
      });
  }, [category]);

  const categoryNames = {
    "men's clothing": "👕 Men's Clothing",
    "women's clothing": "👚 Women's Clothing",
    jewelery: "💍 Jewelry",
    electronics: "📱 Electronics",
  };
  

  return (
    <div className="p-4">
        {/* spring sale banner */}
        <section className="mb-12 bg-yellow-100 p-6 rounded-xl text-center">
         <h2 className="text-2xl font-semibold mb-2">🎉 Spring Sale!</h2>
         <p className="mb-4">Up to 50% off selected items. Limited time only!</p>
         <a href="/products">
            <button className="bg-black text-white py-2 px-6 rounded hover:bg-indigo-900">
            Shop Now
            </button>
        </a>
        </section>

      <h1 className="text-3xl font-bold mb-4">
        {categoryNames[category] || category}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
