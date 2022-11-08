import styled from "styled-components";

export const ContainerProduto = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
padding: 2rem;
text-align: center;
float:right;
border-style:solid;
margin:1rem;
margin-top: 3em;
background-color: #1a1a1a;
color:white;

`;
export const ProdutoImg = styled.img`
  height: 15rem;
  border-radius: 1em;

`;

export const ProdutoDescricao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content:center;
  padding: 2rem;
  text-align: center;
  background-color: var(--secondary-color);
  
`;

export const ProdutoButton = styled.button`
 text-transform: uppercase;
 background-color: #d5601c;
 border-radius: 1rem;
 padding: 0.5rem;
 &:hover{ 
  background-color: red;
 }
`;
