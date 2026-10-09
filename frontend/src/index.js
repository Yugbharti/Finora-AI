import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing page/home/HomePage";
import Sighnup from "./landing page/sighnup/Sighnup";
import Support from "./landing page/support/SupportPage";
import About from "./landing page/about/AboutPage";
import Pricing from "./landing page/pricing/PricingPage";
import Product from "./landing page/product/ProductsPage";
import Navbar from "./landing page/Navbar";
import Footer from "./landing page/Footer";
import NotFound from "./landing page/notfound";
import ScrollToTop from "./landing page/scrollTop";
import Login from "./landing page/login/LoginPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sighnup" element={<Sighnup />} />
      <Route path="/support" element={<Support />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/products" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
