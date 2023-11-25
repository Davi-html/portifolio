import { Container } from "./styles";

import { IoMenu } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

import { useState } from "react";
import { Fade } from "react-awesome-reveal";

export function Header() {
  const [isMobileMenuOpen, setMobileMenu] = useState(false);
  const [isMobileMenuClosed, setMobileMenuClosed] = useState(false);

  const openMenu = () => {
    setMobileMenu((open) => !open);
    setMobileMenuClosed(false);
  };

  return (
    <Container navbar={{ sm: 640, xl: 1440 }} id="topo">
      <h2>Davi Alves</h2>

      <nav
        className={`mobile-menu ${isMobileMenuOpen ? "open" : ""} ${
          isMobileMenuClosed ? "close" : ""
        } `}
      >
        <strong>
          <a href="">Home</a>
        </strong>
        <a href="">About</a>
        <a href="">Projets</a>
        <a href="">Contact</a>
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
