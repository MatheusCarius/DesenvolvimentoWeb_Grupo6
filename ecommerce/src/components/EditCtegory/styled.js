import styled from "styled-components";

export const PopupStyle = styled.div`
background-color: rgba(0, 0, 0, 0.6);

display: flex;

position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;

justify-content: center;
align-items: center;

z-index: 5;

.popup-tela {

  background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
color: whitesmoke;

  flex-direction: column;

    padding: 40px;
    width: 55em;

    align-items: center;
    justify-content: center;

    text-align: center;

    border: 2px solid black;
    border-radius: 10px;

    z-index: 6;
    
}

.popup-tela p {
    font-size: 1.7em;
}

.popup-tela .botoes {
    display: flex;
    gap: 20%;
    
    justify-content: center;
}

.popup-tela .botoes button {
 color: green;

    font-size: 1.3em;

    width: 7em;

    padding: 3px;

    border-radius: 10px;

    transition: 250ms;
}


.popup-tela .botoes button:hover {
}

`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 300px;
  width: 100%;
  max-width: 800px;
  padding-inline: 20px;
  @media (min-width: 1024px){
    padding-inline: 50px;    
    }

`;

export const Input = styled.input`
  height: 3rem;
  font-size: 1.5rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 5em;
`;

export const RegistroButton = styled.button`
  height: 3rem;
  width: 8em;
  font-size: 1.5rem;
  background-color: lightgreen;
  border-radius: 10px;
  &:hover {
    background-color: green;
    cursor: pointer;
  }
`;

export const CancelarButton = styled.button`
    height: 3rem;
    width: 8em;
    font-size: 1.5rem;
    border-radius: 10px;
    background-color: lightcoral;
    
    &:hover {
      background-color: darkred;
      cursor: pointer;

    }
`;