import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" absolute bottom-0 w-full  justify-center px-4 text-gray-100 bg-gray-800">
      <div className="container py-6 m-auto ">
        <div className="flex justify-center mt-6">
          <div className="bg-white rounded-lg">
            <div className="flex flex-wrap justify-between md:flex-row">
              <input
                type="email"
                className="m-1 p-2 w-56 appearance-none text-gray-700 text-sm focus:outline-none"
                placeholder="Ingresa tu correo"
              />
              <button className="w-full m-1 p-2 text-sm bg-gray-800 rounded-lg font-semibold uppercase lg:w-auto">
                Enviar
              </button>
            </div>
          </div>
        </div>

        <hr className="h-px mt-6 bg-gray-700 border-none" />

        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <NavLink to="/" className="text-xl font-bold">
              Movie Corp
            </NavLink>
          </div>
          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <NavLink to="/" className="px-4 text-sm">
                Inicio
              </NavLink>
              <NavLink to="/nosotros" className="px-4 text-sm">
                Nosotros
              </NavLink>
              <NavLink to="/contactanos" className="px-4 text-sm">
                Contactanos
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
