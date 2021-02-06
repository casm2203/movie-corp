import React from "react";
import icon from "../assets/iconn.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-800 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-between">
          <img className="inline-flex mr-5 -mt-3" src={icon} alt="movie" />
          <NavLink
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap  text-white"
            to="/"
          >
            MOVIE Corp
          </NavLink>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
          >
            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div
          className="lg:flex flex-grow items-center"
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="nav-item">
              <NavLink
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/nosotros"
              >
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/contactanos"
              >
                Contactanos
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
          <ul class="flex flex-col lg:flex-row list-none ml-auto">
            <li class="nav-item">
              <NavLink
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="#"
              >
                <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" />
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="#"
              >
                <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" />
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="#"
              >
                <i class="fab fa-instagram text-lg leading-lg text-white opacity-75" />
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="#"
              >
                <i class="fab fa-github text-lg leading-lg text-white opacity-75" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
