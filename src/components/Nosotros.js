import React from "react";
import persona from "../assets/hombre.svg";
import sutherland from "../assets/sutherland.png";
import gocargo from "../assets/gocargo.png";
import sagicc from "../assets/sagicc.jpg";

const Nosotros = () => {
  return (
    <div>
      <section className="bg-white my-10 ">
        <div className="max-w-2xl px-6 text-center mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800">
            Hola{" "}
            <span className="bg-gray-600 text-white rounded px-1">
              Soy Cristian Suarez,
            </span>{" "}
            Mucho gusto.
          </h2>
          <p className="text-gray-600 mt-4">
            Soy actualmente estudiante de Ingeniería de Sistemas en quinto
            semestre de la Universidad de la costa ubicada en
            Barranquilla/Colombia.
          </p>

          <div className="flex items-end justify-center mt-16">
            <img src={persona} alt="Persona" width="189" height="188" />
          </div>
        </div>
      </section>

      <div className="flex items-center pt-5 justify-center ">
        <button className=" flex justify-center px-2 opacity-50 hover:opacity-100 focus:opacity-100 ">
          <img className="w-1/3 " src={sutherland} alt="sutherland" />
        </button>
        <button className="flex justify-center px-2  opacity-50 hover:opacity-100 focus:opacity-100">
          <img className="w-1/3 " src={sagicc} alt="sagicc" />
        </button>
        <button className=" flex justify-center px-2 opacity-50 hover:opacity-100 focus:opacity-100">
          <img className="w-1/3 " src={gocargo} alt="sagicc" />
        </button>
      </div>
    </div>
  );
};
export default Nosotros;
