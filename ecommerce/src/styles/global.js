import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0 ;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    /* font-family: 'Roboto', sans-serif; */
   
   
  }
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-block: 15rem;
    align-items: center;
    width: 100vw;
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