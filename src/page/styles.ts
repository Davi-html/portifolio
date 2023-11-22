import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    .container {
        padding: 40px;
        
        display: flex;
        flex-direction: column;
        align-items: center;

        
        img {
            width: 243px;
            height: 208px;
        }

        .div-button {
            width: 160px;
            margin-top: 32px;
        }

        .icons {
            display: flex;
            gap: 24px;
            margin-bottom: 32px ;
            margin-top: 20px;
        }

        #about-p{
            color: #7DFFAF;
            font-family: kalam;
            margin-bottom: 16px;
        }

        h2 {
            font-size: 21px;

            margin-bottom: 16px;
        }

        @media (min-width: 971px){

            display: flex;
            flex-direction: row;
            gap: 30px;
        
            img {
                width: 50%;
                height: 50%;
            }

        }
    }


`;


