import styled from "styled-components";

export const PopupStyle = styled.div`
background-color: rgba(0, 0, 0, 0.5);

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
    background: #000000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
color: whitesmoke;

    display: flex;
    flex-direction: column;

    padding: 20px;
    width: 25em;
    height: 10em;

    align-items: center;
    justify-content: center;

    border: 2px solid whitesmoke;

    z-index: 6;
    
}

.popup-tela p {
    font-size: 1.5em;
}

.popup-tela .botoes {
    display: flex;
    gap: 20%;
    padding: 5px;
}

.popup-tela .botoes button {
   

    font-size: 1.3em;

    padding: 3px;

    border-radius: 10px;

    transition: 250ms;
}

.close{
    color: whitesmoke;
    background-color: #FF033E;
    border: 2px solid white
}
    .close:hover{
        background-color: #fd5c63;
        
        cursor: pointer;

    }
.confirm{
    color: black;
    background-color: #4FFFB0;
    border: 2px solid white;

}
.confirm:hover{
        background-color: #00FA9A;
        cursor: pointer;
    }

`;