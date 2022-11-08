import React from "react";
import { api } from "../../Services/api/api";
import { ButtonDiv, Descricao, Imagem, ItemContainer, DeletarButao } from "./styled";


export const ItemCarrinho = ({ produto, itemPedido }) => {

  function deletarItemPedido(){
    api.delete(`itemPedido?idItemPedido=${itemPedido[0].idItemPedido}`)
    alert("Produto deletado do pedido")
    window.location.reload(false)
  }

  if (produto === null) {
    return null;
  }

  return (
    <ItemContainer>
      <Imagem src={`${produto.nomeImagemProduto}`} />
      <Descricao>
        <strong>Nome do produto:</strong> {produto.nomeProduto} <br />
        <strong>Preço por Unidade:</strong> R$ {produto.valorUnitario},00 <br />
        <strong>Quantidade:</strong> {itemPedido[0].quantidadeItemPedido} 
        <ButtonDiv>
        <DeletarButao onClick={deletarItemPedido}>Deletar o Item</DeletarButao>
        </ButtonDiv>
      </Descricao>
    </ItemContainer>
  );
};
