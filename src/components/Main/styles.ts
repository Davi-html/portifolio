import styled from "styled-components"

export const Container = styled.main`
    height: auto;
    padding: 48px 24px;

    color: white;

    .div-button {
        width: auto;
        display:flex;
        gap: 10px;
    }

    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap:30px;

    h1, h2 {
        margin-bottom: 24px;
    }

    .div-button {
        margin-top: 24px;
    }

    img {
        width: 243px;
        height: 208px;
    }

    .css-1c2fuzs{
        display: flex;
        justify-content: center;
        margin: auto;
    }

    @media (min-width: 971px){
        .div-button {
            width: 343px;
        }

        display: flex;
        flex-direction: row;
        


        .description {
            max-width: 592px;
        }

        img {
            width: 50%;
            height: 50%;
        }
    }
` 