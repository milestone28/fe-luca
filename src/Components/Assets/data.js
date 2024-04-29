import product_1 from './sourdough_rye.png'
import product_2 from './sourdough_seeded.png'
import product_3 from './sourdough_spelt.png'
import product_4 from './sourdough_white.png'


let data_product = [
    {
        id: 1,
        name: "Sourdough White",
        desc: "Our standard sourdough",
        new_price: 7,
        old_price: 0,
        image: product_1
    },
    {
        id: 2,
        name: "Sourdough Rye",
        desc: "sourdough created with 50% rye flour",
        
        new_price: 8,
        old_price: 0,
        image: product_2
    },
    {
        id: 3,
        name: "Sourdough Spelt",
        desc: "sourdough created with 100% spelt flour",
        new_price: 9,
        old_price: 0,
        image: product_3
    },
    {
        id: 4,
        name: "Sourdough Seeded",
        desc: "Sourdough including a mixture yummy seeds",
        new_price: 9.50,
        old_price: 0,
        image: product_4
    },
]

export default data_product;