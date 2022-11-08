import React, { useState } from "react";
import { BotaoVoltar, BoxButtons, BoxCategoria, CardCategoria, DeleteCategoria, EditCategoria, ListaCategorias } from "./styled";
import { Text } from "./styled";
import { useNavigate } from "react-router-dom";
import { EditarCategoria } from "../EditCtegory"
import { PopupRespostaAPI } from "../../components/PopupRespostaAPI";

export const TabelaCategorias = (props) => {
    const navigate = useNavigate();
    const listaCategorias = props.lista;
    const [id, setId] = useState()
    const [isEditado, setEditado] = useState(false);
    const [isDeletarPressed, setDeletarPressed] = useState(false)

    const handleEditar = () => {
        setEditado(!isEditado)
    }

    const handleClickDeletar = () => {
        setDeletarPressed(e => false)
    }
    return (
        <>
            {isEditado ? <EditarCategoria clickFechar={handleEditar} id={id} categoria={listaCategorias.filter(c => c.id === id)[0]} /> : ''}
            {isDeletarPressed ? <PopupRespostaAPI titulo={'categoria'} tipo={'deletarLoad'} status={''} id={id} click={handleClickDeletar} /> : ''}
            <BoxCategoria>
                <ListaCategorias>
                    {listaCategorias.map(res => {
                        return (<CardCategoria key={res.id}>
                            <Text>Id Categoria: {res.id}</Text>
                            <Text>Nome da Categoria: {res.nome}</Text>
                            <Text>Descrição da Categoria: {res.descricao}</Text>
                            <BoxButtons>
                                <EditCategoria  onClick={() => { setEditado(!isEditado); setId(e => res.id) }}>Editar</EditCategoria>
                                <DeleteCategoria  onClick={() => {
                                    setDeletarPressed(e => true);
                                    setId(e => res.id)
                                }}>Excluir</DeleteCategoria>
                            </BoxButtons>
                        </CardCategoria>
                        );
                    })}
                </ListaCategorias>
                <BotaoVoltar>
                    <button onClick={() => navigate("/Administracao")}>
                        Voltar
                    </button>
                </BotaoVoltar>
            </BoxCategoria>
        </>
       
    );
}