import React, { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../App";
import Modal from "./Modal";

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarRef = useRef();
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [cart, setCart] = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  // Function to increment item quantity
  const incrementQuantity = (itemId) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  // Function to decrement item quantity
  const decrementQuantity = (itemId) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === itemId
          ? {
              ...cartItem,
              quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1,
            }
          : cartItem
      )
    );
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeFromCart = (id) => {
    setCart((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      class={`fixed inset-0 z-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div class="fixed inset-0 bg-black bg-opacity-30"></div>
      <div
        ref={sidebarRef}
        class={`fixed right-0 top-0 h-screen overflow-y-auto w-96 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div class="container font-['Roboto']">
          <button class="absolute  top-2  right-2 text-2xl" onClick={onClose}>
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <div class="mt-4">
            <h2 class="text-xl mb-4 font-bold">My Cart</h2>
            <hr class="border-b" />

            {cart.length === 0 ? (
              <h2 class="text-xl mb-2 font-semibold text-gray-400">
                No items in the cart.
              </h2>
            ) : (
              <form class="mt-4" onSubmit={handleSubmit}>
                <h2 class="text-xl mb-2 font-semibold text-gray-400">
                  Pickup Details
                </h2>

                <input
                  type="date"
                  class="p-2 mb-6 w-full border-2 border-gray-200 rounded cursor-pointer"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />

                {cart.map((cartItems) => (
                  <div class="">
                    <div class="grid grid-cols-12 mb-4">
                      <h2 class="font-semibold text-lg col-span-11">
                        {cartItems.name}
                      </h2>
                      <ion-icon
                        class="text-2xl text-red-500 cursor-pointer"
                        name="close-outline"
                        onClick={() => removeFromCart(cartItems.id)}
                      ></ion-icon>
                    </div>

                    <div class="grid grid-cols-12 mb-8">
                      <p class="col-span-4 justify-center text-lg">
                        ${" "}
                        {cartItems.price
                          .toFixed(2)
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                      </p>

                      {/* Increment */}

                      <p class="col-span-4 justify-center text-lg gap-3">
                        <span class="text-2xl cursor-pointer">
                          <ion-icon
                            onClick={() => {
                              incrementQuantity(cartItems.id);
                            }}
                            class="mt-1"
                            name="add-circle-outline"
                          ></ion-icon>
                        </span>

                        <span class="text-xl font-bold">
                          {cartItems.quantity}
                        </span>

                        {/* Decrement */}

                        <span class="text-2xl cursor-pointer">
                          <ion-icon
                            onClick={() => {
                              decrementQuantity(cartItems.id);
                            }}
                            class="mt-1"
                            name="remove-circle-outline"
                          ></ion-icon>
                        </span>
                      </p>
                      <p class="col-span-4 justify-center text-lg">
                        $ {cartItems.price * cartItems.quantity}
                      </p>
                    </div>
                    <hr class="border-b" />
                  </div>
                ))}

                <div class="grid grid-cols-12 my-8">
                  <p class="col-span-6 justify-start text-base">Total :</p>
                  <p class="col-span-6 justify-end font-bold text-lg">
                    ${calculateTotalPrice().toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setCart([]);
                    setShowModal(true);
                  }}
                  disabled={!date}
                  class={
                    "py-2 text-white rounded-lg w-full transition duration-300 ease-in-out transform hover:text-gray-500 hover:bg-white hover:scale-105 hover:border-gray-400 hover:border-2 " +
                    (!date
                      ? "bg-gray-300 cursor-not-allowed opacity-50"
                      : "bg-bookmark-fonts cursor")
                  }
                >
                  PROCEED TO CHECKOUT
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Modal class="w-full" showModal={showModal} setShowModal={setShowModal}>
        <div class="flex flex-col items-center space-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-green-600 w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 class="text-4xl font-bold">Thank You !</h1>
          <p>
            Thank you for your interest! Check your email for a link to the
            guide.
          </p>
          <button
            className="text-white px-4 py-2 rounded-lg col-span-6
          bg-[#74512D]  hover:bg-[#AF8F6F] "
            onClick={() => {
              setShowModal(false);
            }}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;
