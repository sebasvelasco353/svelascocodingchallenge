import React from 'react'
import styled from 'styled-components';

export const Button = ({ children, handleClick, primary }) => {
const ButtonStyled = styled.button`
  background: ${primary ? "#fa8231" : "white"};
  color: ${primary ? "white" : "#fa8231"};

  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid #fa8231;
  border-radius: 3px;
`;

  return <ButtonStyled onClick={() => handleClick()}>{children}</ButtonStyled>
}
