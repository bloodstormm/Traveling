import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex shadow-md justify-evenly items-center py-8 px-[2em]">
      {/* Logo */}
      <NavLink to="/" className="font-Binerka text-4xl">
        Traveling
      </NavLink>

      <ul className="flex list-none  space-x-8 text-lg">
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? "underline decoration-wavy decoration-main-orange animate-wavy" : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? "underline decoration-wavy decoration-main-orange" : "")}>Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({isActive}) => (isActive ? "underline decoration-wavy decoration-main-orange" : "")}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/register" className={({isActive}) => (isActive ? "underline decoration-wavy decoration-main-orange" : "")}>Cadastrar</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
