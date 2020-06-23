import React from 'react'
import styled from 'styled-components'

export const Button = ({ children, handleClick, type, disabled }) => {
    const ButtonStyled = styled.button`
        color: ${type === "primary" && !disabled ? "white" : "#fa8231"};
        color: ${disabled ? "darkgray" : null};
        background: ${type === "primary" ? "#fa8231" : "white"};

        font-size: 1em;
        margin: 1em;
        padding: 0.5em 1em;
        border: ${disabled ? "2px solid darkgray" : "2px solid #fa8231"};
        border-radius: 3px;
        cursor: ${disabled ? "not-allowed" : "pointer"};
        
        &:hover {
            background: ${type === "primary" ? "#fc8d44" : "white"};
            color: ${type === "primary" ? "white" : "#fc8d44"};
            color: ${disabled ? "lightgray" : null};
            border: ${disabled ? "2px solid lightgray" : "2px solid #fa8231"};
        }
    `;
    return <ButtonStyled disabled={disabled} onClick={() => handleClick()}>{children}</ButtonStyled>
}