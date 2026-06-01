import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        const newQuantity = existing.quantity + product.quantity;

        if (newQuantity > product.stock) {
          alert('No hay suficiente stock');
          return prev;
        }

        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: newQuantity }
            : item
        );
      }

      if (product.quantity > product.stock) {
        alert('No hay suficiente stock');
        return prev;
      }

      return [...prev, product];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const getTotal = () => {
    return cart.reduce(
      (acc, item) => acc + item.precio * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        removeItem,
        clearCart,
        getTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};