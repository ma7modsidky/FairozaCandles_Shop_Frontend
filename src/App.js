import "./App.css";
import "./assets/css/sidebar.css"
import Sidebar from "./components/Sidebar/Sidebar";
import CartBar from "./components/Sidebar/CartBar";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home"
import About from "./pages/About";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Collections from "./pages/Collections";

import "@themesberg/flowbite";
import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(menuOpen => !menuOpen);
  };
  const toggleCart = () => {
    setCartOpen((cartOpen) => !cartOpen);
  };
  const handleOnClose = () => {
    setCartOpen(false);
  };
  return (
    <div id="App" className="relative h-full">
      <Navbar toggleMenu={toggleMenu} toggleCart={toggleCart} />
      <Sidebar
        outerContainerId={"App"}
        pageWrapId={"page-wrap"}
        reveal
        left
        isOpen={menuOpen}
        onStateChange={(state) => setMenuOpen(state.isOpen)}
      />
      <CartBar
        pageWrapId={"page-wrap"}
        outerContainerId={"App"}
        reveal
        right
        isOpen={cartOpen}
        onStateChange={(state) => setCartOpen(state.isOpen)}
        onClose={handleOnClose}
      />
      <main id="page-wrap" className="h-full  ">
        {/* <Link to="/"> home</Link> <Link to="/about"> About</Link> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id/details" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
