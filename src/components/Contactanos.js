import React from "react";

const Nosotros = () => {
  return (
    <form className="form bg-white p-6 my-10 w-1/2 m-auto">
      <h3 className="text-2xl text-gray-900 font-semibold">Contactanos</h3>
      <p className="text-gray-600">
        {" "}
        Hola, si estás interesado puedes enviarnos tu solicitud
      </p>
      <div className="flex space-x-5 mt-3">
        <input
          type="text"
          name=""
          id=""
          placeholder="Nombre"
          className="border p-2  w-1/2"
        />
        <input
          type="tel"
          name=""
          id=""
          placeholder="Apellido"
          className="border p-2 w-1/2"
        />
      </div>
      <input
        type="email"
        name=""
        id=""
        placeholder="Correo Electronico"
        className="border p-2 w-full mt-3"
      />
      <textarea
        name=""
        id=""
        cols="10"
        rows="3"
        placeholder="Mensaje"
        className="border p-2 mt-3 w-full"
      ></textarea>
      <p className="font-bold text-sm mt-3">Acuerdo *</p>
      <div className="flex items-baseline space-x-2 mt-2">
        <input type="checkbox" name="" id="" className="inline-block" />
        <p className="text-gray-600 text-sm">
          Soy consciente que este sitio web almacene la información enviada para
          que pueden responder a mi consulta.
        </p>
      </div>
      <input
        type="submit"
        value="Enviar"
        className="w-full mt-6 bg-gray-700 hover:bg-gray-600 text-white font-semibold p-3"
      />
    </form>
  );
};
export default Nosotros;
