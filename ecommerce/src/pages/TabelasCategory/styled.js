import styled from "styled-components";

export const ListaCategorias = styled.div`
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

export const CardCategoria = styled.div`
  
  display: flex;
  flex-direction: column;
  
  width: 15rem;
  height: 15rem;
  /* min-height: 31rem; */
  font-size: 1.rem;
  
  padding: 20px;
  
  border-radius: 10px; 
  color: whitesmoke ;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

 
`;

export const Text = styled.p`
padding-top: 15px;
text-align: left;
align-self: baseline;


`;

export const BoxButtons = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  gap: 5px;
`;

export const EditCategoria = styled.button`
  width: 40%;
  border-radius: 10px;
  background-color: #eead2d;
  color: white;
  border: none;
  
  
  &:hover{
    background-color: #fff2a6;
    color: black;
    cursor: pointer;

    
  }
`;

export const DeleteCategoria = styled.button`
  width: 40%;
  border-radius: 10px;
  background-color: #8e1600;
  color: white;
  border: none;
  &:hover{
    background-color: #ec7372;
    color: black;
    cursor: pointer;

  }
`;


export const BoxCategoria = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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

color: white;
  }

  button:hover {
   color: gray
  }
`;
