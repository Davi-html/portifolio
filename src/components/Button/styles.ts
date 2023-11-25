import styled from "styled-components";


export const Container = styled.button`
    width: 100%;
    height: 56px;
    
    border-radius: 8px;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    
    background-color: ${(props) => props.color};
    
    font-size: 16px;
    color: white;
`

interface button {
    color: string;
}
