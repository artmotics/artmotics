import React from "react";
import "styles/styles.css";

const Body = () => {
  return (
    <div>
      <div className="grid max-w-6xl grid-cols-1 mx-auto mt-4 lg:grid-cols-7 font-display">
        <div className="w-full h-full col-span-full lg:col-span-4 lg:pr-8">
          <h1 className="text-7xl font-bold tracking-tight">
            Los mejores productos comienzan con ArtMotics
          </h1>
          <h3 className="mt-3 text-2x1 text-gray-700 leading-relaxed">
            ArtMotics es una empresa colombiana dedicada a la fabricación de
            herramientas y objetos en 3D. Los usuarios pueden revisar diseños
            anteriores y/o solicitar nuevos con base en alguna imagen. ArtMotics
            también posee convenios con otras empresas para realizar un servicio
            mas completo.
          </h3>
          <div className="flex mt-8 space-x-4">
            <a
              href="/#"
              className="px-4 py-3 font-semibold text-white transition duraction-200 transform rounded-sm shadow-sm bg-gray-700 hover:bg-gray-600"
            >
              Ver Imagenes
            </a>
          </div>
        </div>

        <div className="max-w-lg mx-auto col-span-full lg:col-span-3 lg:max-w-full">
          <img
            src="https://www.enter.co/wp-content/uploads/2014/04/impr-dest.jpg"
            className="flex-shrink-0  w-full h-full"
            alt=""
          ></img>
        </div>
      </div>

      <div className="relative flex max-w-xl mx-auto mt-12 bg-white border border-gray-200 rounded-md h-44 font-display">
        <div className="absolute inset-0 w-full h-full shadow-lg opacity-50"></div>

        <div className="w-2/5 overflow-hidden rounded-l-md">
          <img
            src="https://i.ytimg.com/vi/MdwA-3aDCEo/sddefault.jpg"
            className="object-cover h-full"
            alt=""
          ></img>
        </div>

        <div className="flex items-center justify-center w-3/5 p-3 bg-white rounded-r-md">
          <h3 className="text-xl font-bold leading-tight tracking-tight">
            planeamos de acuerdos a tus necesidades
          </h3>
        </div>
      </div>

      <div className="flex items-center justify-around h-6 px-1 mx-auto mt-4 bg-gray-100 rounded-full w-14">
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      </div>

      <div className="max-w-6xl mt-16 mx-auto">
        <h3 className="mx-auto text-gray-600 uppercase text-md text-center">
          Los mejores productos certificados por nuestros cliente
        </h3>
      </div>

      <div
        className="grid max-w-6xl grid-cols-3 mx-auto mt-16 font-display"
        id="Servicios"
      >
        <div className="col-span-1 lg:pr-8">
          <h4 className="font-semibold tracking-tight text-gray-500 uppercasetext-md">
            DESING
          </h4>
          <h2 className="mt-2 text-4xl font-bold text-gray-800">
            Trabaja rápido, crea maravillosamente
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-gray-600">
            ArtMotics es una de las principales empresas de venta de productos y
            servicios relacionados con la impresión 3D de Colombia, así como una
            de las empresas más veteranas del sector.
          </p>

          <a
            href="https://www.impresoras3d.com/"
            className="mt-8 inline-block px-5 py-3 font-semibold text-white transition duraction-200 transform rounded-sm shadow-sm bg-gray-700 hover:bg-gray-600"
          >
            Learn more
          </a>
        </div>

        <div className="col-span-2">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hlLJV3AlPOc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="grid max-w-6xl grid-cols-1 mx-auto mt-12 lg:grid-cols-7 font-display">
        <h4 className="font-semibold tracking-tight text-gray-500 uppercasetext-md">
          IMAGENES
        </h4>
      </div>

      <div
        className="grid max-w-6xl grid-cols-1 mx-auto mt-1 lg:grid-cols-7 font-display"
        id="Imagenes"
      >
        <div className="w-full h-full col-span-full lg:col-span-4 lg:pr-8">
          <div className="max-w-lg mx-auto col-span-full lg:col-span-3 lg:pr-8">
            <img
              src="https://www.stanser.com/wp-content/uploads/2018/09/mecanizado-cnc3.jpg"
              className="flex-shrink-0 w-full h-full"
              alt=""
            ></img>
          </div>
        </div>

        <div className="max-w-lg mx-auto col-span-full lg:col-span-3 lg:pr-3">
          <img
            src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_630,q_auto,w_1200/v1597618429/blog-post-open-graph-covers/000/004/637/4637-original.png?1597618429"
            className="flex-shrink-0 w-full h-full"
            alt=""
          ></img>
        </div>
      </div>

      <div
        className="grid max-w-6xl grid-cols-1 mx-auto mt-8 lg:grid-cols-7 font-display"
        id="Imagenes"
      >
        <div className="w-full h-full col-span-full lg:col-span-4 lg:pr-8">
          <div className="max-w-lg mx-auto col-span-full lg:col-span-3 lg:pr-8">
            <img
              src="https://m.media-amazon.com/images/I/71ySLMOuTJL._SL1500_.jpg"
              className="flex-shrink-0 w-full h-full"
              alt=""
            ></img>
          </div>
        </div>

        <div className="max-w-lg mx-auto col-span-full lg:col-span-3 lg:pr-3">
          <img
            src="https://i1.wp.com/www.labrujulaverde.com/wp-content/uploads/2016/08/Picture2.png?fit=721%2C464&ssl=1"
            className="flex-shrink-0 w-full h-full"
            alt=""
          ></img>
        </div>
      </div>

      <div
        className="grid max-w-6xl grid-cols-1 mx-auto mt-8 lg:grid-cols-7 font-display"
        id="Imagenes"
      >
        <div className="w-full h-full col-span-full lg:col-span-4 lg:pr-8">
          <div className="max-w-lg mx-auto col-span-full lg:col-span-3 lg:pr-8">
            <img
              src="https://images.squarespace-cdn.com/content/v1/573ce49d62cd94ec580a78ab/1475278078124-149KYW11FZ7XXAMKRY7G/image-asset.jpeg"
              className="flex-shrink-0 w-full h-full"
              alt=""
            ></img>
          </div>
        </div>

        <div className="max-w-lg mx-auto col-span-full lg:col-span-3 lg:pr-3">
          <img
            src="https://img.bsginstitute.com/repositorioweb/bs-campus/image_blogs/construccion/modelos-3d-2.png"
            className="flex-shrink-0 w-full h-full"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Body;
