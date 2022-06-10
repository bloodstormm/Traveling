import { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Footer from "./Footer";
import Navbar from "./Navbar";

const RoutesContainer = () => {
  const path = useLocation().pathname;

  return (
    <>
      {/* Desabilitando NavBar nas páginas de login/registro */}
      {["/login", "/register"].includes(path) ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* Desabilitando Footer nas páginas de login/registro */}
      {["/login", "/register"].includes(path) ? null : <Footer />}
    </>
  );
};

export default RoutesContainer;
