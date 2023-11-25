declare module '../components/Input' {
    import React from 'react';
  
    interface InputProps {
      // Defina as propriedades do seu componente Input aqui
      value: string;
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }
  
    const Input: React.FC<InputProps>;
    export default Input;
  }