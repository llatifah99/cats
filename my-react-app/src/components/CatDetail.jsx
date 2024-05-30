import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCatContext } from "../data/catContext";

function CatDetail() {
  const { id } = useParams();
  const { selectedCat, fetchCatById } = useCatContext();

  useEffect(() => {
    fetchCatById(id);
  }, [id]);

  if (!selectedCat)
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="relative shadow-lg flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-5xl md:min-h-80 md:max-h-96 md:flex-row">
        <Link
          to="/"
          className="absolute top-0 left-0 m-4 flex items-center text-slate-700 hover:text-sky-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </Link>
        <img
          className="h-full w-full rounded-t-lg object-cover md:h-auto md:w-96 md:!rounded-none md:!rounded-s-lg"
          src={`https://cdn2.thecatapi.com/images/${selectedCat.reference_image_id}.jpg`}
          alt={selectedCat.name}
        />
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium">{selectedCat.name}</h5>
          <p className="mb-2 text-base">{selectedCat.description}</p>
          <p className="mb-2 text-base">Origin : {selectedCat.origin}</p>
          <p className="mb-2 text-base">
            {selectedCat.name}'s temperamement : {selectedCat.temperament}
          </p>
          <span>
            Find out more about {selectedCat.name} on{" "}
            <a
              href={selectedCat.wikipedia_url}
              target="_blank"
              className="text-sky-600"
            >
              Wikipedia
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CatDetail;
