import Nav from "./Components/Navbar/Nav";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Menu from "./Pages/Menu/Menu";
import React, { useState } from "react";
export const CartContext = React.createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="app">
      <BrowserRouter>
      <CartContext.Provider value={[cart, setCart]} >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs category="aboutus" />} />
          <Route path="/menu" element={<Menu />}>
            <Route path=":menuId" element={<Menu />} />
          </Route>
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
