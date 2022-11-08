import styled from 'styled-components'


export const NavbarSection = styled.section`
    color: whitesmoke;
    font-weight: 600;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 2rem;
    width: 100%;
    height: 5rem;

    background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;

export const NavbarContainer = styled.nav`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    @media (min-width: 1024px) {
        margin-inline: 50px;
    }
`;

export const NavbarLista = styled.ul`
    display: none;
    @media (min-width: 1024px) {
        display: flex;
        gap: 2rem;
        margin-bottom: 0;
    }
`;

export const NavbarItem = styled.li`
    color: whitesmoke;
    list-style: none;
    font-size: 1.8rem;
    text-decoration: none;
    transition: 0.5s;
    &:hover{
        transform: scale(130%);
    }
`;

export const LinkHome = styled.div`
    color: whitesmoke;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    gap: 10px;
    &:hover{
        transform: scale(130%);
    }
`;

export const NomeLogo = styled.p`
    display: block;
    font-size: 1.8rem;
    margin-bottom: 0;
`;

export const MenuOption = styled.button`
    width: 70vw;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 3rem;
    text-decoration: none;
    color: var(--background);

    border-radius: 1rem;
    &:hover{
    }
`;

export const MenuOptionLogin = styled.button`
    width: 70vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 3rem;
    text-decoration: none;
    color: whitesmoke;
    background-color: var(--secondary-color);
    border-radius: 1rem;
    &:hover{
        background-color: var(--primary-color);
    }
`;