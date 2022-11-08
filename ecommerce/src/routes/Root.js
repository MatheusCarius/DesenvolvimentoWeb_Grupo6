import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Sobre } from "../pages/sobre";
import { AdmPedido } from "../pages/PedidoADM";
import { ProductList } from "../pages/ProductList";
import { ProductPage } from "../pages/ProductPage";
import PainelAdministrativo from "../pages/Administrativo";
import { Categoria } from "../pages/CategoryADM";
import { AdmCliente } from "../pages/Cliente";

export const PrivateRoutes = () => {
  function isAuthenticated() {
    if (localStorage.getItem("admin") !== null) {
      return true;
    } else {
      return false;
    }
  }
};

export const Root = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/pedido" element={<AdmPedido />} />
      <Route path="/produto" element={<ProductList />} />
      <Route path="/produto-view" element={<ProductPage />} />
      <Route path="/administracao" element={<PainelAdministrativo />} />
      <Route path="/painel_administrativo/categoria" element={<Categoria />} />
      <Route path="/painel_administrativo/pedido" element={<AdmPedido />} />
      <Route path="/painel_administrativo/cliente" element={<AdmCliente />} />





      {/* <Route path="/carrinho" element={<Carrinho/>}/>
        <Route path="/catalogo/:categoria&:id" element={<Categorias />} />
        <Route path="/catalogo/:categoria&:idCategoria/:idProduto" element={<Produto />} />
        <Route path="/login" element={<Login/>}/> */}

      <Route element={<PrivateRoutes />}>
        {/* <Route path="/painel_administrativo/produto" element={<AdmProduto/>}/>      
          <Route path="/categoria" element={<Categoria/>}/>
          <Route path="/painel_administrativo" element={<PainelAdministrativo/>}/>
          <Route path="/painel_administrativo/pedido" element={<AdmPedido/>}/>
          <Route path="/painel_administrativo/cliente" element={<AdmCliente/>}/> */}
      </Route>
    </Routes>
  );
};
