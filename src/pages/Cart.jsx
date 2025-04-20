import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Let's shopping!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <hr className="my-4" />
          <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;