import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
  
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    color: #FA8072;

  }
  `;

  export const Button   = styled.div`


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
`;
export const ImageDesktop = styled.img`
    margin-top: 2rem;
    display: none;
    

    @media (min-width: 1024px){
        display: block;
        padding-inline: 2%;    
    }
`;
