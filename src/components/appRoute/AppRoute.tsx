import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AboutUs from "../pages/aboutus";
import Contact from "../pages/contact";
import Service from "../pages/service";

const AppRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoute;
