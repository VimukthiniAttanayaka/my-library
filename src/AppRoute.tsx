import React from "react";
import { Row } from "react-bootstrap";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/home";
import AboutUs from "./components/pages/aboutus";
import Contact from "./components/pages/contact";
import Service from "./components/pages/service";

const AppRoute: React.FC = () => {
  return (
    <Row>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </Row>
  );
};
export default AppRoute;
