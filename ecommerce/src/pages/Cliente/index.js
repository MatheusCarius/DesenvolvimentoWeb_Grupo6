import React from "react";
import { api } from "../../Services/api/api";
import {TabelaClientes} from "../../components/TabelaClientes";
import { Container, GlobalStyle, Titulo } from "../../styles/global";
import BadRequest from "../../components/BadRequest"

const { useState, useEffect } = require("react");

export function AdmCliente(props){
    const [listaClientes, setListaClientes] = useState([]);
    const [statusAPI, setStatusAPI] = useState(0);

    useEffect(() => {
        carregarAPI();
    }, []);

    function carregarAPI() {
        const getPedidoAPI = async () => {
            try{
                const res = await statusAPI.get("cliente");
                console.log(res)
                setStatusAPI(res.status)
                setListaClientes(res.data);
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
          return <><TabelaClientes lista={listaClientes}/></>
        } if(statusAPI === 502) {
          return <><BadRequest/></>
        } else {
          return <><BadRequest/></>
        }
      }

      return(
        <>
        <Container>
        <Titulo>Listar Clientes</Titulo>
        {verificarResponse()}
        </Container>
        </>
      );
}