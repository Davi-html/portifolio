declare module '../components/Button' {
    import React from 'react';
  
    interface ButtonProps {
      onClick: () => void;
      label: string;
    }
  
    const Button: React.FC<ButtonProps>;
    export default Button;
  }