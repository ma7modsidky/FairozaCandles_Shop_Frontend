import "./App.css";
import "./assets/css/sidebar.css"
import Sidebar from "./components/Sidebar/Sidebar";
import CartBar from "./components/Sidebar/CartBar";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home"
import About from "./pages/About";

import "@themesberg/flowbite";
import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(menuOpen => !menuOpen);
  };
  const toggleCart = () => {
    setCartOpen((cartOpen) => !cartOpen);
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
      />
      <main id="page-wrap" className="h-full  ">
        {/* <Link to="/"> home</Link> <Link to="/about"> About</Link> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
