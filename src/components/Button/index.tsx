import { Container } from './styles'

import { ReactNode } from 'react';

interface ButtonProps {
  name: string;
  Icon: ReactNode; // Alterado para ReactNode
  IconR: ReactNode; // Alterado para ReactNode
  color: string;
}

export function Button({name, Icon, IconR, ...rest}: ButtonProps){
    return(
        <Container 
            type='button'
            {...rest }
        >
            {Icon}
            {name}
            {IconR}
        </Container>
    )
}