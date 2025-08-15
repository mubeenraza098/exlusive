"use client";
import React from "react";
import { useCart } from "@/app/context/CartContext"; // Import CartContext
import { IoCloseCircle } from "react-icons/io5"; // Cross Icon for removal
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart(); // Get cart, removeFromCart, and updateQuantity function

  // Handle quantity change
  const handleQuantityChange = (id: string, type: string) => {
    // Find the product by id
    const product = cart.find((item) => item.id === id);

    if (product) {
      const newQuantity =
        type === "increment" ? product.quantity + 1 : product.quantity - 1;

      // Ensure quantity doesn't go below 1
      if (newQuantity >= 1) {
        updateQuantity(id, newQuantity);
      }
    }
  };
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingFee = 10;
  const totalAmount = subtotal + shippingFee;


  return (
    <div className="md:w-[1170px] mx-auto p-7">
      {/* Header Row */}
      <motion.div className="grid grid-cols-4 text-center font-semibold p-4 bg-gray-100 shadow-md rounded-t-md">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          Product
        </motion.h2>

        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          Price
        </motion.h2>

        <motion.h2
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          Quantity
        </motion.h2>

        <motion.h2
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          Subtotal
        </motion.h2>
      </motion.div>

      {/* Cart Items */}

      {cart.map((item, index) => (
        <motion.div
          key={index}
          className="md:grid md:grid-cols-4 flex flex-row items-center gap-4 border-b py-6 px-3 text-center "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        >
          {/* Product */}
          <div className="flex md:flex-row flex-col items-center gap-3 justify-start ml-3">
            <Image src={item.image} width={50} height={39} alt={item.name} />
            <span className="text-[16px]">{item.name}</span>
          </div>

          {/* Price */}
          <div className="text-[16px]">${item.price}</div>

          {/* Quantity */}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => handleQuantityChange(item.id, "decrement")}
              className="bg-gray-300 text-[16px] px-3 py-1 rounded-md"
            >
              -
            </button>
            <span className="text-[16px]">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.id, "increment")}
              className="bg-gray-300 text-[16px] px-3 py-1 rounded-md"
            >
              +
            </button>
          </div>

          {/* Subtotal with Cross Button */}
          <div className="flex items-center justify-between   text-[16px] md:ml-[99px] font-medium">
            <div>
              <span>${item.price * item.quantity}</span>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              <IoCloseCircle className="text-[20px] mb-20 md:mb-0" />
            </button>
          </div>
        </motion.div>
      ))}

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Left: Coupon */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Coupon Input + Apply Button */}
          <div className="flex md:flex-row flex-col items-center gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-black px-4 py-2 rounded-md w-full max-w-xs"
            />

            {/* Apply Coupon Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
            >
              Apply Coupon
            </motion.button>
          </div>

          {/* Return To Shop Button */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="md:m-0 mx-auto"
          >
            <button className="border px-6 py-2  rounded-md mt-4 transition duration-300 hover:bg-black hover:text-white">
              <Link href={"/"}>Return To Shop</Link>
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Cart Total */}

        <motion.div
          className="border p-6 rounded-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Cart Total Heading */}
          <motion.h2
            className="text-xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Cart Total
          </motion.h2>

          {/* Subtotal */}
          <div className="flex justify-between items-center py-2 border-b text-[16px]">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between items-center py-2 border-b text-[16px]">
            <span>Shipping:</span>
            <span>${shippingFee}</span>
          </div>

          {/* ✅ Total */}
          <div className="flex justify-between items-center py-2 border-b mb-4 text-[16px]">
            <span>Total:</span>
            <span>${totalAmount}</span>
          </div>

          {/* Proceed Button */}
          <motion.button
            className="bg-red-500 text-white px-6 py-3 w-full rounded-md hover:bg-red-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            Proceed to checkout
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CartPage;
