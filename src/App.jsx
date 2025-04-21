import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Collection from "./pages/collection";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Navbar from "./components/Navbar"; // Uncommented (or remove <Navbar /> if unused)
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ScrollToTop from "./pages/ScrollToTop";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </router>
    </div>
  );
};

export default App;
