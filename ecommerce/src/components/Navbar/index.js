import React from "react"
import {useState} from 'react';
import { NavbarSection, NavbarContainer, NavbarLista, NavbarItem, LinkHome, NomeLogo, MenuOption, MenuOptionLogin } from "./style";
import "./style.css"
import Logo from "../../Sources/img/logo.png";
import {Link} from "react-router-dom"

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  function activeMenu() {
    setIsActive(current => !current);
  }

  return (
    <>
    <NavbarSection>
      <NavbarContainer>
        <Link to="/" style={{textDecoration: "none"}}><LinkHome><img src={Logo} alt="logo" width="40px" />
          <NomeLogo>SerraShop</NomeLogo></LinkHome></Link>
          <NavbarLista>          
          <Link to="/produto" style={{textDecoration: "none"}}><NavbarItem>Produtos</NavbarItem></Link>
          <Link to="/carrinho" style={{textDecoration: "none"}}><NavbarItem>Carrinho</NavbarItem></Link>
          <Link to="/sobre" style={{textDecoration: "none"}}><NavbarItem>Sobre</NavbarItem></Link>
          <Link to="/Administracao" style={{textDecoration: "none"}}><NavbarItem>Login</NavbarItem></Link>
                
          
        </NavbarLista>

        <button
          id="icon-menu"
          className="navbar-toggler second-button shadow-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent23"
          aria-controls="navbarSupportedContent23"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={activeMenu}
        >
          <div id="animated-icon2" className={isActive? 'animated-icon2 open': 'animated-icon2'}>
            <span></span><span></span><span></span><span></span>
          </div>
        </button>

        <div id="navMenu" className={isActive? 'active': ''}>
          <div id="menu-options">
          <Link to="/catalogo" style={{textDecoration: "none"}}onClick={activeMenu}><MenuOption>Produtos</MenuOption></Link>
          <Link to="/carrinho" style={{textDecoration: "none"}}><MenuOption onClick={activeMenu}>Carrinho</MenuOption></Link>    
          <Link to="/sobre" style={{textDecoration: "none"}}onClick={activeMenu}><MenuOption>Sobre</MenuOption></Link>
          </div>
        </div>
      </NavbarContainer>
    </NavbarSection>
    <script src="./script.js"></script>
    </>
  )
}
