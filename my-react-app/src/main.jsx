import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Cats from "./components/Cats";
import CatDetail from "./components/CatDetail";
import { CatProvider } from "./data/catContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CatProvider>
        <App>
          <Routes>
            <Route path="/" element={<Cats />} />
            <Route path="/cat/:id" element={<CatDetail />} />
          </Routes>
        </App>
      </CatProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
