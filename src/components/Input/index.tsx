import {Container} from './styles'

interface InputProps {
    name: string
}

export function Input({name}:InputProps){
    return(
        <Container placeholder={name}>
        </Container>
    )
}