import React, { Component } from 'react'
import styled from 'styled-components'


const SelectStyled = styled.select`
    color: #ffffff;
`;

export class Select extends Component {
    render() {
        return (
            <SelectStyled value={this.props.value}>
                {this.props.options.map((option) => {
                    <option value={option.value}>{option.label}</option>
                })}
            </SelectStyled>
        )
    }
}
