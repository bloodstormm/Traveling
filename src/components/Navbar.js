import { NavLink } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";
import { useAuthentication } from "../hooks/useAuthentication";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const { logout } = useAuthentication();
  const { user } = useAuthValue();
  const [open, setOpen] = useState(true);

  return (
    <nav className="md:flex shadow-md justify-evenly items-center py-8 px-[2em]">
      {/* Logo */}
      <NavLink to="/" className="font-Binerka text-4xl">
        Traveling
      </NavLink>

      <div
        onClick={() => setOpen(!open)}
        className="text-2xl absolute right-8 top-9 cursor-pointer md:hidden"
      >
        {open ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>
      <ul
        className={`md:flex items-center absolute md:static md:my-0 w-full mt-4 pb-3 md:pb-0 pl-[2em] shadow-xl md:w-auto md:shadow-none bg-creamBG space-y-3 md:space-y-0
        md:z-auto z-[1] left-0 list-none md:space-x-8 text-lg 
        transition-all duration-500 transform ease-all ${
          open ? "left-[-150px] opacity-0" : " opacity-100"
        } md:opacity-100`}
      >
        {user && (
          <>
            <li>
              <NavLink
                to="/dashboard"
                onClick={() => setOpen(!open)}
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-wavy decoration-main-orange"
                    : ""
                }
              >
                Perfil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/posts/create"
                onClick={() => setOpen(!open)}
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-wavy decoration-main-orange"
                    : ""
                }
              >
                Nova publicação
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setOpen(!open)}
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-wavy decoration-main-orange"
                    : ""
                }
              >
                Sobre
              </NavLink>
            </li>
            <li onClick={logout} className="w-fit cursor-pointer py-1 px-6 text-red-800 font-bold bg-red-200 hover:bg-red-300 transition rounded-xl">
              <NavLink to="/login">Sair</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
