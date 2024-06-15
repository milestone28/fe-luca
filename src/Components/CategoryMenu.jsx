import React, { useContext, useState } from "react";
import menuItems from "../data";
import Modal from "./Modal";
import { CartContext } from "../App";
import SideMenu from "../Components/SideMenu";

const CategoryMenu = () => {
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useContext(CartContext);
  const [temp_cart, settemp_Cart] = useState([]);
  const addToCart = (product) => {
    setCart((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === product.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === product.id ? { ...i } : i
        );
      } else {
        return [...prevItems, product];
      }
    });
   // setCart([...cart, product]);
    settemp_Cart([product]);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="container mx-auto p-4 font-['Gilroy']">
      <h1 class="text-3xl font-bold mb-4 text-bookmark-fonts">Our Menu</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 relative">
        {menuItems.map((item) => (
          <div key={item.id} class="bg-white rounded-lg shadow-lg p-4">
            <img
              src={item.imageUrl}
              alt={item.name}
              class="h-72 w-full object-cover rounded-t-lg"
            />
            <div class="px-6 py-4 h-32">
              <h2 class="text-xl font-semibold text-bookmark-fonts">
                {item.name}
              </h2>
              <p class="text-gray-500 text-base">{item.description}</p>
              <p class="text-lg font-bold mt-2">$ {item.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} </p>
            </div>
            <div class="px-6 pb-4 flex flex-col items-center">
              <button
                onClick={() => {
                  setShowModal(true);
                  addToCart(item);
                }}
                class="justify-center flex gap-2 container py-2 mt-6 bg-bookmark-fonts text-white rounded-2xl w-3/4 transition duration-300 ease-in-out transform hover:text-gray-500 hover:bg-white hover:scale-105 hover:border-gray-400 hover:border-2"
              >
                <ion-icon class="text-2xl" name="cart-outline"></ion-icon> Add
                to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal class=" w-full" showModal={showModal} setShowModal={setShowModal}>
        <h2 className="text-2xl font-bold mb-4 text-[#56493F] font-['Roboto']">
          Product has been added to cart.
        </h2>
        {temp_cart.map((item) => (
          <div class="grid grid-cols-12 gap-4 mb-4">
            <div class="col-span-4">
              <img
                class="w-full h-16 border border-[#725654]"
                src={item.imageUrl}
                alt=""
              />
            </div>
            <div class="col-span-8 w-full font-['Roboto']  ml-4">
              <h2 className="text-lg">{item.name}</h2>
              <p class="font-bold text-lg">$ {item.price
                          .toFixed(2)
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</p>
            </div>
          </div>
        ))}

        <div class="grid grid-cols-12 gap-4 font-['Roboto']">
          <button
            className="text-white px-4 py-2 rounded-lg col-span-6
          bg-[#74512D]  hover:bg-[#AF8F6F] "
            onClick={() => {
              setShowModal(false); 
              toggleMenu()
            }}
          >
            View Cart
          </button>
          <button
            className="text-white px-4 py-2 rounded-lg col-span-6
          bg-[#543310]  hover:bg-[#AF8F6F]"
            onClick={() => setShowModal(false)}
          >
            Continue Shopping
          </button>
        </div>
      </Modal>

      <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
    
  );
};

export default CategoryMenu;
