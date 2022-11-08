import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Home } from "../pages/Home";
import { Categoria } from "../pages/Category";

export const PrivateRoutes = () => {
  function isAuthenticated() {
    if (localStorage.getItem("admin") !== null) {
      return true;
    } else {
      return false;
    }
  }

  return isAuthenticated() ? <Outlet /> : <Navigate to="/admlogin" />;
};

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/catalogo/:categoria&:id" element={<Categorias />} />
      <Route
        path="/catalogo/:categoria&:idCategoria/:idProduto"
        element={<Produto />}
      />
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/painel_administrativo/produto" element={<AdmProduto />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route
          path="/painel_administrativo"
          element={<PainelAdministrativo />}
        />
        <Route path="/painel_administrativo/pedido" element={<AdmPedido />} />
        <Route path="/painel_administrativo/cliente" element={<AdmCliente />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/productList" element={<ProductList />} />
      </Route>
    </Routes>
  );
};
