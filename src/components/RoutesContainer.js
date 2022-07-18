import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import About from "../pages/About/About";
import CreatePost from "../pages/CreatePost/CreatePost";
import Dashboard from "../pages/Dashboard/Dashboard";
import EditPost from "../pages/EditPost/EditPost";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Post from "../pages/Post/Post";
import Register from "../pages/Register/Register";
import Search from "../pages/Search/Search";
import Footer from "./Footer";
import Navbar from "./Navbar";

const RoutesContainer = ( {user} ) => {
  const path = useLocation().pathname;

  return (
    <>
      {/* Desabilitando NavBar nas páginas de login/registro */}
      {["/login", "/register", ].includes(path) ? null : <Navbar />}
      <Routes>
        <Route path="/" element={!user ? <Navigate to="/login" /> : <Home />} />
        <Route path="/about" element={!user ? <Navigate to="/login" /> : <About />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/search" element={!user ? <Login /> : <Search />} />
        <Route path="/posts/:id" element={!user ? <Login /> : <Post />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/dashboard" element={!user ? <Navigate to="/login" /> : <Dashboard /> } />
        <Route path="/posts/create" element={!user ? <Navigate to="/login" /> :  <CreatePost /> } />
        <Route path="/posts/edit/:id" element={!user ? <Navigate to="/login" /> : <EditPost /> } />
        <Route path="/*" element={<PageNotFound /> } />
      </Routes>
      {/* Desabilitando Footer nas páginas de login/registro */}
      {["/login", "/register", "/posts/create", "/about"].includes(path) ? null : <Footer />}
    </>
  );
};

export default RoutesContainer;
