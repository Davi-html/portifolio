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
        gap: 30px;
    }

    @media (max-width: 688px){
        nav {
            display: none;
        }

        padding: 16px;

        svg {
            font-size: 40px;
        }
    }

    @media (min-width: 688px){
        svg {
            display: none;
        }
    }

    

`;

