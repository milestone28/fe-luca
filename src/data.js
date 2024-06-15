import product_1 from './Components/Assets/sourdough_white.png'
import product_2 from './Components/Assets/sourdough_rye.png'
import product_3 from './Components/Assets/sourdough_spelt.png'
import product_4 from './Components/Assets/sourdough_seeded.png'

export const menuItems = [
  {
    id: 1,
    name: "Sourdough White",
    description: "Our standard sourdough.",
    price: 7.00,
    imageUrl: product_1,
    quantity: 1
  },
  {
    id: 2,
    name: "Sourdough Rye",
    description:
      "Sourdough created with 50%b rye flour.",
    price: 8.00,
    imageUrl: product_2,
    quantity: 1
  },
  {
    id: 3,
    name: "Sourdough Spelt",
    description: "Sourdough created with 100% spelt flour.",
    price: 9.00,
    imageUrl: product_3,
    quantity: 1
  },
  {
    id: 4,
    name: "Sourdough Seeded",
    description:
      "Sourdough including a mixture of yummy seeds.",
    price: 9.50,
    imageUrl: product_4,
    quantity: 1
  },
];

export default menuItems;
