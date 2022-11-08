import styled from "styled-components";

export const Background = styled.div`
  height: 100%;
  background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


`
export const BotoesPainel = styled.div`
  width: 100%;
  height: 100vh;
  margin-block: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  button {
    color: whitesmoke;
    background-color:  #FA8072;
    width: 30rem;
    height: 4.5em;
    font-size: 2rem;
    font-weight: 600;
    border-radius: 10px;
    transition: 500ms;
  }

  button:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;
