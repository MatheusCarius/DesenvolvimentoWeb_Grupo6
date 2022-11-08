import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0 ;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
 
   
   
  }
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    width: 100%;
    background-color: #FA8072;
`;

export const ContainerTituloSubtitulo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95vw;
`;



export const Titulo = styled.h1`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    align-items: center;

    position: relative;
    display: inline;
    color: var(--secondary-color);
    text-transform: uppercase;
    text-align: center;
    font-size: 2.2rem;

    @media (min-width: 1024px) {
        margin-top: 12rem;
    }
`;

export const Subtitulo = styled.h3`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    color: var(--primary-color);
    text-transform: uppercase;

    text-transform: uppercase;
    text-align: center;
    font-size: 2.0rem;
    text-shadow: 3px 3px 10px black;

    
`;

export const DivPersonalizada = styled.div`
    width: ${props => props.width};
    border: ${props => props.border};
    padding: 25px; //padding fixo de 25 pixel
    margin: ${props => props.margin};
    margin-top: ${props => props.marginTop};
`;

export const NavBar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--cor-primaria);

    li {
        float: left;
        
        :last-child {
            float:right
        }

        :first-child {
            margin-left: 20px;
        }
    }

    li a {
        display: block;
        color: #fff;
        padding: 15px 17px;
        text-decoration: none;
        text-align: center;

        :hover {
            background-color: tomato;
        }
    }

`;


export const ContainerTituloSubtitulo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95vw;
`;



export const Titulo = styled.h1`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    align-items: center;

    position: relative;
    display: inline;
    color:tomato
    text-transform: uppercase;
    text-align: center;
    font-size: 2.2rem;

    @media (min-width: 1024px) {
        margin-top: 12rem;
    }
`;

export const Subtitulo = styled.h3`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    color:tomato;
    text-transform: uppercase;

    text-transform: uppercase;
    text-align: center;
    font-size: 2.0rem;
    text-shadow: 3px 3px 10px black;
`;


export const SobreDescricao = styled.p`

  color: black;

  font-size: 1.7rem;
  padding-inline: 5%;

  text-align: center;

`

export const SobreMain = styled.div`


.sobre {
  margin: 0;
}

.titulo {
  margin-top: 5em;
  font-size: 3em;
}
.buttonHome{

  color:  #FA8072;
   background: black;
   border-radius: 10px;
   display:flex;
   justify-content: center;
   :hover{
  background:  #FA8072;
  color: black;
  
}
}


`