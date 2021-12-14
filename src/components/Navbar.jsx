import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-700 shadow-lg">
      <div className="container mx-auto PX-4">
        <div className="sm:flex justify-around">
          <a href="/inicio" className="text-white text-3xl font-bold p-3">
            ARTMOTICS
          </a>

          <ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none">
            {/* <li className="sm:inline-block">
              <a href="/inicio" className="p-3 hover:text-white">
                Inicio
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="/#Servicios" className="p-3 hover:text-white">
                Servicios
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="/#Imagenes" className="p-3 hover:text-white">
                Imagenes
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="/#footer" className="p-3 hover:text-white">
                Contactos
              </a>
            </li> */}
            <li className="sm:inline-block">
              <Link to="/auth/login">
                <button classNameName="bg-gray-500 p-2 text-white rounded-lg shadow-md hover:bg-gray-400">
                  Iniciar Sesión
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
