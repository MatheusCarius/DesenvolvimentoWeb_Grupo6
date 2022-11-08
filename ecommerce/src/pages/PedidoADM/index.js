import React, {useState, useEffect} from "react";
import BadRequest from "../../components/BadRequest"
import { TabelaPedidos } from "../../components/TabelasPedido";
import {Container, Titulo} from "../../styles/global"
import { api } from "../../Services/api/api";
import { useNavigate } from "react-router-dom";

export function AdmPedido(props) {
    const [listaPedidos, setListaPedidos] = useState([]);
    const [statusAPI, setStatusAPI] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {
        carregarAPI();
    },[]);

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
          return <><BadRequest/></>
        } else {
          return <><BadRequest/></>
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
    
