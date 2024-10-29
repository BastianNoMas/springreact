import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductoList from "./components/ProductoList";
import ProductoForm from "./components/ProductoForm";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductoList />} />
        <Route path="/agregar" element={<ProductoForm />} />
        <Route path="/editar/:id" element={<ProductoForm />} />
      </Routes>
    </Router>
  );
};

export default App;
