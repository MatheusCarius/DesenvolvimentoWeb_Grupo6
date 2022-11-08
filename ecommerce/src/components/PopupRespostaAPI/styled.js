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
   
    background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    display: flex;
    flex-direction: column;

    padding: 20px;
    width: 45em;
    height: 15em;

    align-items: center;
    justify-content: center;

    border: 2px solid black;

    z-index: 6;
    
}

.popup-tela p {
    font-size: 1.5em;
    color: whitesmoke;
}


.botaoConfirmar {
background-color: red;
    font-size: 1.3em;
    width: 7em;

    padding: 3px;

    border-radius: 10px;

    transition: 250ms;
}
.botaoDeletar {
    background-image: radial-gradient( circle 860px at 11.8% 33.5%,  rgba(240,30,92,1) 0%, rgba(244,49,74,1) 30.5%, rgba(249,75,37,1) 56.1%, rgba(250,88,19,1) 75.6%, rgba(253,102,2,1) 100.2% );
    color: whitesmoke;
    font-size: 1.3em;
    width: 7em;

    padding: 4px;
    margin-top: 10px;

    border-radius: 10px;

    transition: 250ms;
}

    .botaoCancelar{
       
        background-image: radial-gradient( circle farthest-corner at 50.7% 54%,  rgba(204,254,152,1) 0%, rgba(229,253,190,1) 92.4% );
       color: black;
        font-size: 1.3em;
        width: 7em;

    padding: 4px;
    margin-top: 10px;

    border-radius: 10px;

    transition: 250ms;
    }

.boxBotoes {
    display: flex;
    gap: 10em;
}

.botaoConfirmar:hover {
}

.botaoDeletar:hover {
    background-image: linear-gradient( 178.2deg,  rgba(118,8,23,1) 10.9%, rgba(158,12,33,1) 62.6% );
    cursor: pointer;
}

.botaoCancelar:hover{
    cursor:pointer;

    background-color: #85FFBD;
background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);

}


`;