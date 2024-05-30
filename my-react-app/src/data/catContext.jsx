import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const CatContext = createContext();

export const CatProvider = ({ children }) => {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get("https://api.thecatapi.com/v1/breeds");
        setCats(response.data);
      } catch (err) {
        console.log("error fetching cats data: ", err);
      }
    };
    fetchCats();
  }, []);

  const fetchCatById = async (id) => {
    try {
      setSelectedCat(null);
      const response = await axios.get(
        `https://api.thecatapi.com/v1/breeds/${id}`
      );
      setSelectedCat(response.data);
    } catch (err) {
      console.log("error fetching cat data:", err);
    }
  };

  return (
    <CatContext.Provider
      value={{ cats, selectedCat, fetchCatById, setSelectedCat }}
    >
      {children}
    </CatContext.Provider>
  );
};

export const useCatContext = () => {
  return useContext(CatContext);
};
