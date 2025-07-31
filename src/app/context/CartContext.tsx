'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  oldPrice: number;
  image: string;
}

interface CartContextProps {
  cart: CartItem[];
  wishlist: CartItem[];
  wishlistCount: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  addToWishlist: (item: CartItem) => void;
  removeFromWishlist: (id: string) => void;
}

const CartContext = createContext<CartContextProps | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<CartItem[]>([]);

  // Load from localStorage once
  useEffect(() => {
    const c = localStorage.getItem('cart');
    const w = localStorage.getItem('wishlist');
    if (c) setCart(JSON.parse(c));
    if (w) setWishlist(JSON.parse(w));
  }, []);

  // Save to localStorage when cart/wishlist change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (item: CartItem) => {
    if (cart.some(i => i.id === item.id)) return;
    setCart([...cart, { ...item, quantity: item.quantity || 1 }]);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(i => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart(cart.map(i => i.id === id ? { ...i, quantity } : i));
  };

  const addToWishlist = (item: CartItem) => {
    if (wishlist.some(i => i.id === item.id)) return;
    setWishlist([...wishlist, item]);
  };

  const removeFromWishlist = (id: string) => {
    setWishlist(wishlist.filter(i => i.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        wishlistCount: wishlist.length,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToWishlist,
        removeFromWishlist
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
