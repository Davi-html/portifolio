import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 80px;
    padding: 16px 80px;

    color: white;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);

    display: flex;
    align-items: center;
    justify-content: space-between;


    a:first-child {
        color: #F5F6F6;
    }

    a {
        text-decoration: none;
        color: #CDD0D4;
    }


    nav {
        display: flex;
        align-items: center;
        gap: 30px;
        z-index: 999;
        
    }

    .sun {
        font-size: 24px;
    }

    @media (max-width: 688px){
        nav {
            display: none;
            position: absolute;
            
            width: 280px;
            height: 88%;
            
            padding: 24px 16px;
            bottom: 0;
            right: 0;
            
            background-color: #2C243B;
            flex-direction: column;
            align-items: end;
        }

        hr {
            display: flex;
            border: solid 1px #413A4F;
            width: 100%;
        }

        padding: 16px;

        .hamburguer {
            font-size: 40px;
        }

        .div-pt {
            height: auto;
            width: auto;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
        }

        .pt{
            padding: 12px;
            
            background-color: #413A4F;

            border-radius: 8px;
        }

        .sun  {
            background-color: #413A4F;
            border-radius: 8px;
            font-size: 48px;
            padding: 12px;
        }

    }

    @media (min-width: 689px){
        .hamburguer {
            display: none;
        }

        hr {
            display: none;
        }

        .div-pt {
            display: flex;
            gap: 30px;
        }
    }

    .open {
        display: flex;
        animation-name: animacao;
        animation-duration: 1s;
    }

    @keyframes animacao {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
        
    }

`;

