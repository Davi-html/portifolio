declare module '../components/Main' {
    import React from 'react';
  
    interface MainProps {
      content: string;
    }
  
    const Main: React.FC<MainProps>;
    export default Main;
  }