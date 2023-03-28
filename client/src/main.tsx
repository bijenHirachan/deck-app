import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Deck from "./components/Deck";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/decks/:id" element={<Deck />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
