import React, {useState} from "react";
import { BotaoVoltar, BoxPedido, ListaPedidos, CardPedido, DeletePedido, BoxButtons } from "./styled";

import { useNavigate } from "react-router-dom";
import {PopupRespostaAPI} from "../PopupRespostaAPI"

export function TabelaPedidos(props){
    const navigate = useNavigate();
    const listaPedidos = props.lista;
    const [id, setId] = useState()
    const [isDeletarPressed, setDeletarPressed] = useState(false)

    const handleClick = () => {
        setDeletarPressed(e => false)

    }

    return (
        <>
            {isDeletarPressed ? <PopupRespostaAPI titulo={'pedido'} tipo={'deletarLoad'} status={''} id={id} click={handleClick}/> : ''}
            <BoxPedido>
                <ListaPedidos>               
                       {listaPedidos !== [] ? listaPedidos.map(res => {
                            return <CardPedido key={res.id}>
                                        <p>Id Pedido: {res.id}</p>
                                        <p>Id Cliente: {res.idCliente}</p>
                                        <p>Nome Cliente: {res.nomeCliente}</p>

                                        <p>Status: {res.pedidoStatus === true ? 'Ativo' : 'Inativo'}</p>
                                        <p>Data do Pedido: {res.dataPedido}</p>
                                        <p>Data da Entrega: {res.dataEntrega}</p>
                                        <p>Total: R$ {res.total},00</p>
                                        <p> Itens: {res.itens}</p>
                                        <BoxButtons>
                                            <DeletePedido onClick={() => {
                                                setDeletarPressed(e => true);
                                                setId(e => res.id)}}>Excluir</DeletePedido>
                                        </BoxButtons>
                                    </CardPedido>
                        }) : ''}                        
                </ListaPedidos>
                <BotaoVoltar>
                    <button onClick={() => navigate("/painel_administrativo")}>
                        Voltar
                    </button>
                </BotaoVoltar>
            </BoxPedido>
        </>
    );
}


