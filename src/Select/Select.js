import React, { Component } from 'react'
import styled from 'styled-components'


const SelectStyled = styled.select`
    color: #ffffff;
    width: 500px;
`;

export class Select extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <SelectStyled value={this.props.value} onChange={(event) => this.props.handleChange(event.target.value)}>
                {this.props.options.map((option) => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </SelectStyled>
        )
    }
}