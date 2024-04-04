import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./Page/Home";
import Products from "./Page/Products";
import LoginRegister from "./Page/LoginRegister";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Page/About";
import "./App.css";
import { useSelector } from "react-redux";

export default function App() {
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login-register"
            element={token ? <Navigate to={"/"} /> : <LoginRegister />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
