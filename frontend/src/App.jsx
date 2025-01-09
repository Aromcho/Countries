import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CountryList from "./pages/CountryList/CountryList";
import CountryDetail from "./pages/CountryDetail/CountryDetail";
import { HelmetProvider } from  "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
    <Routes>
      <Route path="/" element={<CountryList />} />
      <Route path="/country/:code" element={<CountryDetail />} />
    </Routes>
    </HelmetProvider>
  );
}

export default App;
