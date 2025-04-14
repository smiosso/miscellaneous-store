import ProductList from '../components/ProductList';

const Products = () => {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <ProductList />
    </div>
  );
};

export default Products;