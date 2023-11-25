import { Container } from "./styles";

import { IoMenu } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

import { useState } from "react";

interface HeaderProps {
  
}

export function Header() {
  const [isMobileMenuOpen, setMobileMenu] = useState(false);
  const [isMobileMenuClosed, setMobileMenuClosed] = useState(false);

  const openMenu = () => {
    setMobileMenu((open) => !open);
    setMobileMenuClosed(false);
  };

  return (
    <Container  id="topo">
      <h2>Davi Alves</h2>

      <nav
        className={`mobile-menu ${isMobileMenuOpen ? "open" : ""} ${
          isMobileMenuClosed ? "close" : ""
        } `}
      >
        <strong>
          <a href="#description">Home</a>
        </strong>
        <a href="#about">About</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
        <hr />
        <div className="div-pt">
          <a href="" className="pt">
            PT
          </a>
          <MdOutlineWbSunny className="sun" />
        </div>
      </nav>

      <IoMenu className="hamburguer" onClick={openMenu} />
    </Container>
  );
}
