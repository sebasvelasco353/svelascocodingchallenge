import React from 'react';
import styled from 'styled-components';

export const TextInput = ({placeholder}) => {
    const TextInputStyled = styled.input`
        font-size: 1em;
        margin: 1em;
        padding: 0.5em 1em;
        border: none;
        border-bottom: 2px solid #fa8231;
        cursor: pointer;
        text-align: center;
        
        &:hover {
            border-bottom: 2px solid #fc8d44;
        }
    `;
    return (
        <TextInputStyled placeholder={placeholder} />
    )
}
