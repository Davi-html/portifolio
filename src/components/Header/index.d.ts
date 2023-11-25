declare module '../components/Header' {
    import React from 'react';
  
    interface HeaderProps {
      title: string;
    }
  
    const Header: React.FC<HeaderProps>;
    export default Header;
  }