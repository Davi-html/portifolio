import { Container } from "./styles";
import { Button } from "../Button";

import { SiReaddotcv } from "react-icons/si";
import { IoArrowForward } from "react-icons/io5";

import { Fade } from "react-awesome-reveal";


export function Main() {
  return (
    <Container id='description'>
      <Fade cascade damping={0.1}>
        <div className="description" id="description">
          <h1>Hi, i'm Davi</h1>
          <h2>FrontEnd developer</h2>
          <p>
            I'm a Frontend Programmer. I've been studying for 3 years and I intend to one day become a FullStack Programmer. Starting Programming in 2021, I recognize myself as an enthusiast in new technologies on the market, with learning acquired day after day.
          </p>
          <div className="div-button">
            <a href="#about">
              <Button
                id="cursor"
                IconR={null}
                name="About me"
                Icon={<SiReaddotcv size={24} />}
                color="#413A4F"
              />
            </a>
            <a href="#projects">
              <Button
                id="cursor"
                Icon={null}
                name="Projets"
                IconR={<IoArrowForward size={24} color="white" />}
                color="#8A42DB"
                />
              </a>
          </div>
        </div>
      </Fade>
        <img src="https://65616c49a9fd6e61dce56405--steady-speculoos-0e2510.netlify.app/bro.svg" alt="" />
    </Container>
  );
}
