import { Container } from './styles'

export function Button({name, Icon, IconR, ...rest}){
    return(
        <Container {...rest }>
            {Icon}
            {name}
            {IconR}
        </Container>
    )
}