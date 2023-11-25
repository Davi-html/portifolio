import {Container} from './styles'

interface TextareaProps {
    name: string
}
  

export function Textarea({name}:TextareaProps){
    return(
        <Container placeholder={name}>
        </Container>
    )
}