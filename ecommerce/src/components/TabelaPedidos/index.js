import React, { useState } from 'react';
import { BotaoVoltar, BoxPedido, ListaPedidos, CardPedido, DeletePedido, BoxButtons } from "./style";
import { useNavigate } from "react-router-dom";
import { PopupPedidoAPI } from '../PopupPedidoAPI';

function TabelaPedidos(props) {
    const navigate = useNavigate();
    const listaPedidos = props.lista;
    const [id, setId] = useState()
    const [isDeletarPressed, setDeletarPressed] = useState(false)

    const handleClick = () => {
        setDeletarPressed(e => false)
    }

    return (
        <>
            {isDeletarPressed ? <PopupPedidoAPI titulo={'pedido'} tipo={'deletarLoad'} status={''} id={id} click={handleClick}/> : ''}
            <BoxPedido>
                <ListaPedidos>               
                       {listaPedidos !== [] ? listaPedidos.map(res => {
                            return <CardPedido key={res.idPedido}>
                                        <p>Id Pedido: {res.idPedido}</p>
                                        <p>Id Cliente: {res.idCliente}</p>
                                        <p>Status: {res.status === true ? 'Ativo' : 'Inativo'}</p>
                                        <p>Data do Pedido: {res.dataPedido}</p>
                                        <p>Data da Entrega: {res.dataEntrega}</p>
                                        <p>Data do Envio: {res.dataEnvio}</p>
                                        <p>Valor Bruto: R$ {res.valorTotalPedidoBruto},00</p>
                                        <p>Valor Desconto: R${res.valorTotalDescontoPedido},00</p>
                                        <p>Valor Liquido: R$ {res.valorTotalPedidoLiquido},00</p>
                                        <BoxButtons>
                                            <DeletePedido onClick={() => {
                                                setDeletarPressed(e => true);
                                                setId(e => res.idPedido)}}>Excluir</DeletePedido>
                                        </BoxButtons>
                                    </CardPedido>
                        }) : ''}                        
                </ListaPedidos>
                <BotaoVoltar>
                    <button onClick={() => navigate("/")}>
                        Voltar
                    </button>
                </BotaoVoltar>
            </BoxPedido>
        </>
    );
}

export default TabelaPedidos;