declare module '../components/Textarea' {
    import React from 'react';
  
    interface TextareaProps {
      value: string;
      onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    }
  
    const Textarea: React.FC<TextareaProps>;
    export default Textarea;
  }