import React from 'react';

declare module '../Button' {
  interface ButtonProps {
    name: string;
    Icon: React.ReactNode;
    IconR: React.ReactNode;
    color?: string;
    // outras propriedades se necessário
  }

  const Button: React.FC<ButtonProps>;
  export default Button;
}