import React, { useState } from 'react';
import { BotaoVoltar, BoxCliente, ListaClientes, CardCliente, DeleteCliente, BoxButtons, Text } from "./styled";
import { useNavigate } from "react-router-dom";
import { PopupRespostaAPI } from "../../components/PopupRespostaAPI"

export function TabelaClientes(props) {
    const navigate = useNavigate();
    const listaClientes = props.lista;
    const [id, setId] = useState()
    const [isDeletarPressed, setDeletarPressed] = useState(false)

    const handleClick = () => {
        setDeletarPressed(e => false)
    }


    return (
        <>
            {isDeletarPressed ? <PopupRespostaAPI titulo={'cliente'} tipo={'deletarLoad'} status={''} id={id} click={handleClick} /> : ''}
            <BoxCliente>
                <ListaClientes>
                    {listaClientes !== [] ? listaClientes.map(res => {
                        return <CardCliente key={res.id}>
                            <Text>Id Cliente: {res.id}</Text>
                            <Text>Email: {res.email}</Text>
                            <Text>Nome Completo: {res.nome}</Text>
                            <Text>CPF: {res.cpf}</Text>
                            <Text>Data de Nascimento: {res.dataNascimento}</Text>
                            <BoxButtons>
                                <DeleteCliente onClick={() => {
                                    setDeletarPressed(e => true);
                                    setId(e => res.id)
                                }}>Excluir</DeleteCliente>
                            </BoxButtons>
                        </CardCliente>
                    }) : ''}
                </ListaClientes>
                <BotaoVoltar>
                    <button onClick={() => navigate("/Administracao")}>
                        Voltar
                    </button>
                </BotaoVoltar>
            </BoxCliente>
        </>
    );
}