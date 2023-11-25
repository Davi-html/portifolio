import { Container } from "./styles";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Button } from "../components/Button";
import {Input} from '../components/Input'
import { Textarea } from '../components/Textarea'

import { Fade } from "react-awesome-reveal";

import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { SiTailwindcss, SiTypescript, SiReaddotcv } from "react-icons/si";
import { IoArrowForward, IoArrowUp  } from "react-icons/io5";
import { CiLinkedin, CiInstagram  } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";




export function App() {
  return (
    <Container>
      <Header/>
      <Main />
      <Fade cascade damping={0.1}>
        <section>
          <div className="about-me" id="about">
            <img src="https://65616c49a9fd6e61dce56405--steady-speculoos-0e2510.netlify.app/foto-perfil.svg" alt="" />
            <div className="resume">
              <div className="icons">
                <IoLogoJavascript color="#9955E8" />
                <IoLogoReact color="#9955E8" />
                <SiTypescript color="#9955E8" />
                <SiTailwindcss color="#9955E8" />
              </div>
              <div className="headline">
                <p id="about-p">About me</p>
                <h2>
                  I’m a passionate Frontend developer looking for my first
                  international oppotunity
                </h2>
                <p>
                  I am currently seeking opportunities to bring my skills and
                  enthusiasm to a tech company in the United States or Europe
                  and am excited about the prospect of relocating to pursue new
                  challenges.
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
                      <img src="https://65616c49a9fd6e61dce56405--steady-speculoos-0e2510.netlify.app/Project%20image.png" alt="" />
                    </div>
                    <div className="section">
                      <p id="date">Jul - Dec 2020</p>
                      <IoLogoReact color="#9955E8" />
                      <SiTypescript color="#9955E8" />
                    </div>
                    <p id="title">Lorem ipsum dolor</p>
                    <p id="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae iusto molestias, impedit recusandae beatae magni quisquam officiis laudantium numquam, fugit atque rerum vero. Molestiae voluptas blanditiis reiciendis consectetur eum!
                    </p>
                  </div>
                </div>
              </Fade>

              <Fade cascade damping={0.1}>
                <div className="card-body">
                  <div className="card-content">
                    <div className="img">
                      <img src="https://65616c49a9fd6e61dce56405--steady-speculoos-0e2510.netlify.app/Project%20image.png" alt="" />
                    </div>
                    <div className="section">
                      <p id="date">Jul - Dec 2020</p>
                      <IoLogoReact color="#9955E8" />
                      <SiTypescript color="#9955E8" />
                    </div>
                    <p id="title">Lorem ipsum dolor</p>
                    <p id="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae iusto molestias, impedit recusandae beatae magni quisquam officiis laudantium numquam, fugit atque rerum vero. Molestiae voluptas blanditiis reiciendis consectetur eum!
                    </p>
                  </div>
                </div>
              </Fade>

              <Fade cascade damping={0.1}>
                <div className="card-body">
                  <div className="card-content">
                    <div className="img">
                      <img src="https://65616c49a9fd6e61dce56405--steady-speculoos-0e2510.netlify.app/Project%20image.png" alt="" />
                    </div>
                    <div className="section">
                      <p id="date">Jul - Dec 2020</p>
                      <IoLogoReact color="#9955E8" />
                      <SiTypescript color="#9955E8" />
                    </div>
                    <p id="title">Lorem ipsum dolor</p>
                    <p id="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae iusto molestias, impedit recusandae beatae magni quisquam officiis laudantium numquam, fugit atque rerum vero. Molestiae voluptas blanditiis reiciendis consectetur eum!
                    </p>
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
                  IconR={<IoArrowForward size={24} />}
                  />
              </div>
            </Fade>
          </div>
      </section>

      <section>
        <div className="all-info" id="contact">
          <div className="info">
            <div className="img-info"><img src="https://65616c49a9fd6e61dce56405--steady-speculoos-0e2510.netlify.app/contact.svg" alt="" /></div>
            <p id="contact-p">Contact</p>
            <Fade cascade damping={0.1}>
              <h2>Enjoyed my work? Let’s work together</h2>
              <p>
                I’m always up for a chat. Pop me an email at <span>davifernandes3674@gmail.com</span> or give me a shout on social media. 
              </p>
            <Fade cascade damping={0.1}></Fade>
              <div className="social-icon">
                <a href="https://github.com/Davi-html" target="_blank">
                  <FaGithub size={50} color='white'/>
                </a>
                <a href="https://www.linkedin.com/in/davi-fernandes-alves-1a48b1273/" target="_blank">
                  <CiLinkedin size={50}/>
                </a>
                <a href="https://www.instagram.com/davi.fcxp/" target="_blank">
                <CiInstagram size={50}/>
                </a>
              </div>
            </Fade>
          </div>
          <div className="form">
            <Input name="Name"/>
            <Input name="E-mail"/>
            <Textarea name='Your menssage'/>
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
        <a href="https://github.com/Davi-html" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/davi-fernandes-alves-1a48b1273/" target="_blank">Linkedin</a>
        <a href="https://www.instagram.com/davi.fcxp/" target="_blank">Instagram</a>
        <a href="#topo"><IoArrowUp size={25}/></a>
      </footer>
      
    </Container>
  );
}
