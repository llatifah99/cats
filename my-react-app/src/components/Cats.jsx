import React from "react";
import { Link } from "react-router-dom";
import { useCatContext } from "../data/catContext";

function Cats() {
  const { cats } = useCatContext();

  if (!cats || cats.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-slate-700">Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="h-16 flex items-center justify-center z-10 w-full">
        <h1 className="text-3xl font-bold text-slate-700">Cat List :</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {cats.map((cat) => (
          <div
            key={cat.id}
            className="block w-64 h-96 m-4 rounded-lg bg-white shadow-lg hover:bg-sky-100 dark:bg-neutral-700"
          >
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="w-full h-56 object-cover rounded-t-lg"
                src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                alt={cat.name}
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {cat.name}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Origin: {cat.origin}
              </p>
              <Link
                to={`/cat/${cat.id}`}
                className="inline-block rounded bg-sky-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white transition duration-300 ease-in-out hover:bg-sky-700"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cats;
