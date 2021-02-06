import React from "react";

function Search() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
      <div className="box pt-6">
        <div className="box-wrapper">
          <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
            <button className="outline-none focus:outline-none">
              <i className="fas fa-search"></i>
            </button>
            <input
              type="search"
              name=""
              id=""
              placeholder="Buscar..."
              x-model="q"
              className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
            />
            <div className="select">
              <select
                name=""
                id=""
                x-model="image_type"
                className="text-sm outline-none focus:outline-none bg-transparent"
              >
                <option value="all" selected>
                  Todo
                </option>
                <option value="photo">Photo</option>
                <option value="illustration">Illustration</option>
                <option value="vector">Vector</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
