import React, { useState, useEffect } from "react";

import TabelaPedidos from "../../components/TabelaPedidos/index";
import { Container, Titulo } from "../../styles/global.js"
import { api } from "../../Services/api/api";

function AdmPedido(props) {
  const [listaPedidos, setListaPedidos] = useState([]);
  const [statusAPI, setStatusAPI] = useState(0)

  useEffect(() => {
    carregarAPI();
  }, []);

  function carregarAPI() {
    const getPedidoAPI = async () => {
      try {
        const res = await api.get("pedido");
        console.log(res)
        setStatusAPI(res.status)
        setListaPedidos(res.data);
      } catch (error) {
        console.log(error)
        if(error.code === 'ERR_NETWORK') {
          setStatusAPI(e => 502)
        }
      }
    };
    getPedidoAPI();
  }

  const verificarResponse = () => {
    if (statusAPI === 0) {
      return <></>
    } if (statusAPI === 200) {
      return <><TabelaPedidos lista={listaPedidos}/></>
    } if(statusAPI === 502) {
      return <> <h1>Ops... Alguma coisa deu errado</h1></>
    } else {
      return <> <h1>Ops... Alguma coisa deu errado</h1></>
    }
  }

  return (
    <>
    <Container>
    <Titulo>Listar Pedidos</Titulo>
    {verificarResponse()}
    </Container>
    </>
  );
}

export default AdmPedido;
