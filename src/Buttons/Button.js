import React from 'react'
import styled from 'styled-components';

export const Button = ({ children, handleClick, style, disabled }) => {
    const ButtonStyled = styled.button`
        background: ${style === "primary" ? "#fa8231" : "white"};
        color: ${style === "primary" ? "white" : "#fa8231"};

        font-size: 1em;
        margin: 1em;
        padding: 0.5em 1em;
        border: 2px solid #fa8231;
        border-radius: 3px;
        cursor: pointer;
        
        &:hover {
            background: ${style === "primary" ? "#fc8d44" : "white"};
            color: ${style === "primary" ? "white" : "#fc8d44"};
            border: 2px solid #fc8d44;
        }
    `;
    return <ButtonStyled disabled={disabled} onClick={() => handleClick()}>{children}</ButtonStyled>
}