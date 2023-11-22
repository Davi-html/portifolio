import { Container } from './styles'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Button } from '../components/Button'

import { Fade } from "react-awesome-reveal";

import { SiReaddotcv } from "react-icons/si";
import { IoLogoJavascript, IoLogoReact  } from "react-icons/io5";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

export function App() {
   return (
     <Container>
        <Header/>
        <Main/>
        <Fade direction={'left'}>
          <section>
            <div className="container">
              <img src="/src/assets/foto-perfil.svg" alt="" />
              <div className="resume">
                <div className="icons">
                  <IoLogoJavascript color='#9955E8'/>
                  <IoLogoReact color='#9955E8'/>
                  <SiTypescript color='#9955E8'/>
                  <SiTailwindcss color='#9955E8'/>
                </div>
                <div className="headline">
                  <p id='about-p'>About me</p>
                  <h2>
                    I’m a passionate software developer looking for my first international oppotunity
                  </h2>
                  <p>
                    I am currently seeking opportunities to bring my skills and enthusiasm to a tech company in 
                    the United States or Europe and am 
                    excited about the prospect of relocating to pursue new challenges.
                  </p>
                </div>
                <div className="div-button">
                  <Button name='Projects'  color='#8A42DB' Icon={<SiReaddotcv size={24} />} />  
                </div>
              </div>
            </div>
          </section>
        </Fade>
      </Container>  
  )
}
