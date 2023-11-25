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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Reiciendis, consectetur quis ab, non nostrum asperiores officia veritatis quia rem autem 
            voluptates qui sapiente? Quae, quisquam architecto necessitatibus deleniti doloribus.
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
