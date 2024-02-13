import { Container } from "./styles";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textarea";
import { Slider } from "../components/Slider";

import { Fade } from "react-awesome-reveal";

import { SiTypescript, SiReaddotcv } from "react-icons/si";
import { IoArrowForward, IoArrowUp, IoLogoReact, IoLogoJavascript } from "react-icons/io5";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";

import ecomerce from "../assets/project-ecomece.png";
import curso from "../assets/project-cursos.png";
import creditcard from "../assets/project-creditcard.png";

export function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Fade cascade damping={0.1}>
        <section>
          <Slider />
          <div className="about-me" id="about">
            <img
              src="https://65616c49a9fd6e61dce56405--steady-speculoos-0e2510.netlify.app/foto-perfil.svg"
              alt=""
            />
            <div className="resume">
              <div className="headline">
                <p id="about-p">About me</p>
                <h2>
                  I focus on development with JavaScript, TypeScript, React,
                  among other technologies that I use to create web
                  applications.
                </h2>
                <p>
                  I consider myself agile and consistent in learning a new
                  language and adapting to any change, ready to overcome any
                  challenge! If I could describe myself in 3 words, they would
                  certainly be: optimistic, persevering and hardworking! :)
                </p>
              </div>
              <div className="div-button">
                <a href="#projects">
                  <Button
                    id="cursor"
                    IconR={null}
                    name="Projects"
                    color="#8A42DB"
                    Icon={<SiReaddotcv size={24} />}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <section>
        <div className="projects" id="projects">
          <Fade cascade damping={0.1}>
            <p id="project-p">Projects</p>
            <h2>Take a look at my highlighted projects</h2>
          </Fade>

          <div className="all-cards">
            <Fade cascade damping={0.1}>
              <div className="card-body">
                <div className="card-content">
                  <div className="img">
                    <a href="https://ntnshop.netlify.app/" target="blank">
                      <img src={ecomerce} alt="" />
                    </a>
                  </div>
                  <div className="section">
                    <p id="date">02/12/2024</p>
                    <IoLogoReact color="#9955E8" />
                    <IoLogoJavascript color="#9955E8" />
                  </div>
                  <p id="title">E-commerce</p>
                  <p id="desc">
                    I recently developed an innovative e-commerce platform, providing users with a unique online shopping experience. The platform stands out for its dynamic and responsive interface, simplifying navigation and product selection. The modern and attractive styling contributes to a visually captivating experience, while the implementation of features such as real-time shopping cart enhances the efficiency of the purchasing process.
                  </p>
                  <div className="repo-deploy">
                    <a
                      href="https://ntnshop.netlify.app/"
                      target="blank"
                    >
                      <Button
                        id="cursor"
                        Icon={null}
                        name="Deploy"
                        color="#8A42DB"
                        IconR={<GrDeploy size={24} />}
                      />
                    </a>
                    <a
                      href="https://github.com/Davi-html/NTNshop"
                      target="blank"
                    >
                      <Button
                        id="cursor"
                        Icon={null}
                        name="Repositório"
                        color="#8A42DB"
                        IconR={<RiGitRepositoryCommitsFill size={24} />}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade cascade damping={0.1}>
              <div className="card-body">
                <div className="card-content">
                  <div className="img">
                    <a href="https://main--educacional.netlify.app/" target="blank">
                      <img
                        src={curso}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="section">
                    <p id="date">11/05/2023</p>
                    <IoLogoReact color="#9955E8" />
                    <SiTypescript color="#9955E8" />
                  </div>
                  <p id="title">Online Course Platform</p>
                  <p id="desc">
                    I developed this project as part of the challenge proposed by the Futuro Dev John channel. It is an online course sales platform, where users can explore a variety of courses and acquire knowledge interactively. I used JavaScript for dynamic features and Tailwind CSS to style the website. This project stands out with its engaging homepage, organized course catalog, and detailed pages that provide crucial information to interested users.
                  </p>
                  <div className="repo-deploy">
                    <a
                      href="https://main--educacional.netlify.app/"
                      target="blank"
                    >
                      <Button
                        id="cursor"
                        Icon={null}
                        name="Deploy"
                        color="#8A42DB"
                        IconR={<GrDeploy size={24} />}
                      />
                    </a>
                    <a
                      href="https://github.com/Davi-html/site-educacional"
                      target="blank"
                    >
                      <Button
                        id="cursor"
                        Icon={null}
                        name="Repositório"
                        color="#8A42DB"
                        IconR={<RiGitRepositoryCommitsFill size={24} />}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade cascade damping={0.1}>
              <div className="card-body">
                <div className="card-content">
                  <div className="img">
                    <a href="https://cartao-de-credito.netlify.app/" target="blank">
                      <img
                        src={creditcard}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="section">
                    <p id="date">11/07/2023</p>
                    <IoLogoJavascript color="#9955E8" />
                  </div>
                  <p id="title">Credit card</p>
                  <p id="desc">
                    I developed this project as part of a challenge to improve my JavaScript skills, using the jQuery library to facilitate DOM manipulation. The site offers an interactive experience, allowing users to fill out credit card information dynamically. I highlight the realistic interface, data validations and visual feedback, providing valuable practice in real-time data manipulation with jQuery.
                  </p>
                  <div className="repo-deploy">
                    <a
                      href="https://cartao-de-credito.netlify.app/"
                      target="blank"
                    >
                      <Button
                        id="cursor"
                        Icon={null}
                        name="Deploy"
                        color="#8A42DB"
                        IconR={<GrDeploy size={24} />}
                      />
                    </a>
                    <a
                      href="https://github.com/Davi-html/cartao-de-credito"
                      target="blank"
                    >
                      <Button
                        id="cursor"
                        Icon={null}
                        name="Repositório"
                        color="#8A42DB"
                        IconR={<RiGitRepositoryCommitsFill size={24} />}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <Fade cascade damping={0.1}>
            <div className="div-button">
              <Button
                id="cursor"
                Icon={null}
                name="See all"
                color="#413A4F"
                IconR={<SiReaddotcv size={24} />}
              />
            </div>
          </Fade>
        </div>
      </section>

      <section>
        <div className="all-info" id="contact">
          <div className="info">
            <div className="img-info">
              <img
                src="https://65616c49a9fd6e61dce56405--steady-speculoos-0e2510.netlify.app/contact.svg"
                alt=""
              />
            </div>
            <p id="contact-p">Contact</p>
            <Fade cascade damping={0.1}>
              <h2>Enjoyed my work? Let’s work together</h2>
              <p>
                I’m always up for a chat. Pop me an email at{" "}
                <span>davifernandes3674@gmail.com</span> or give me a shout on
                social media.
              </p>
              <Fade cascade damping={0.1}></Fade>
              <div className="social-icon">
                <a href="https://github.com/Davi-html" target="_blank">
                  <FaGithub size={50} color="white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/davi-fernandes-alves-1a48b1273/"
                  target="_blank"
                >
                  <CiLinkedin size={50} />
                </a>
                <a href="https://www.instagram.com/davi.fcxp/" target="_blank">
                  <CiInstagram size={50} />
                </a>
              </div>
            </Fade>
          </div>
          <div className="form">
            <Input name="Name" />
            <Input name="E-mail" />
            <Textarea name="Your menssage" />
            <div className="div-button">
              <a href="">
                <Button
                  id="cursor"
                  Icon={null}
                  name="Send me a message"
                  color="#8A42DB"
                  IconR={<IoArrowForward size={24} />}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <a href="https://github.com/Davi-html" target="_blank">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/davi-fernandes-alves-1a48b1273/"
          target="_blank"
        >
          Linkedin
        </a>
        <a href="https://www.instagram.com/davi.fcxp/" target="_blank">
          Instagram
        </a>
        <a href="#topo">
          <IoArrowUp size={25} />
        </a>
      </footer>
    </Container>
  );
}
