import { Container } from "./styles";
import { Button } from "../Button";

import { SiReaddotcv } from "react-icons/si";
import { IoArrowForward } from "react-icons/io5";

import { Fade } from "react-awesome-reveal";

export function Main() {
  return (
    <Container>
      <Fade cascade damping={0.1}>
        <div className="description">
          <h1>Hi, i'm Davi</h1>
          <h2>FrontEnd developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Reiciendis, consectetur quis ab, non nostrum asperiores officia veritatis quia rem autem 
            voluptates qui sapiente? Quae, quisquam architecto necessitatibus deleniti doloribus.
          </p>
          <div className="div-button">
            <Button
              name="About me"
              Icon={<SiReaddotcv size={24} />}
              color="#413A4F"
            />
            <Button
              name="Projets"
              IconR={<IoArrowForward size={24} color="white" />}
              color="#8A42DB"
            />
          </div>
        </div>
      </Fade>
        <img src="/src/assets/bro.svg" alt="" />
    </Container>
  );
}
