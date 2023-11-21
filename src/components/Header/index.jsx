import { Container } from './styles'
import { IoMenu } from "react-icons/io5";
import './index'

export function Header(){

    return(
          
        <Container navbar={{sm: 640, xl: 1440, }}>
            <h2>Davi Alves</h2>
            
            <nav className='menu'>
            <strong>
                <a href="">Home</a>
            </strong>
            <a href="">About</a>
            <a href="">Projets</a>
            <a href="">Contact</a>
            <a href="">PT</a>  
            </nav>

            <IoMenu className='hamburguer'/>

        </Container>
    )
}




