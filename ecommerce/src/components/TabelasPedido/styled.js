import styled from "styled-components";

export const ListaPedidos = styled.div`
width: 100%;
height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (min-width: 1024px){
      flex-direction: row; 
      flex-wrap: wrap;
      
    }
`;

export const CardPedido = styled.div`
  width: 320px;
  font-size: 1.6rem;
  padding: 20px;
  border-radius: 10px;  

  background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
color: whitesmoke;
`;

export const BoxButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  padding-top:5px ;
`;

export const EditPedido = styled.button`
  width: 40%;
  border-radius: 10px;
  background-color: #eead2d;
  color: white;
  border: none;
  &:hover{
    background-color: #fff2a6;
    color: black;
  }
`;

export const DeletePedido = styled.button`
  width: 40%;
  height: 1.2rem;
  border-radius: 10px;
  background-color: #8e1600;
  color: white;
  font-weight: 600;
  border: none;
  &:hover{
    background-color: red;
    color: whitesmoke;
    cursor: pointer;
  }
`;


export const BoxPedido = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
`;

export const BotaoVoltar = styled.div`
  padding-top: 5em;
  display: flex;
  justify-content: center;
  
  

  button {
    
    cursor: pointer;
    width: 8em;
    height: 2.5em;
    font-size: 2em;
    border-radius: 10px;
    transition: 500ms;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    margin-bottom: 20px;
color: white;
  }

  button:hover {
   color: gray
  }
`;

export const Rodape = styled.footer`
background-color: black;
`;
