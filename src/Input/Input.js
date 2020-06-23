import React, { Component } from 'react';
import styled from 'styled-components';

/*
* Example handleChane {
* handleInputChange(e) {
*   this.setState({
*       inputText: e.target.value
*   })
* }
*/

const InputStyled = styled.input`
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

export class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    checkNumbers(event){
        const inputChar = (event.target.validity.valid) ? event.target.value : event.target.value.replace(/\D/,'');
        console.log();
        // TODO: fix formatting because on bug numbers returns NaN
        this.props.handleChange(new Intl.NumberFormat().format(inputChar));
    }
    renderInput(){
    switch (this.props.type) {
        case "number":
                return (
                    // TODO: FIX responsive its showing regular keyboard, need to change it to numbers only
                    <InputStyled value={this.props.value} pattern="[0-9]*" onChange={(event) => this.checkNumbers(event)} placeholder={this.props.placeholder ? this.props.placeholder : "Numbers Input"} />
                )
            break;
        default:
                return (
                    <InputStyled value={this.props.value} onChange={(event) => this.props.handleChange(event.target.value)} placeholder={this.props.placeholder ? this.props.placeholder : "Text Input"} />
                )
            break;
    }
   }
   render(){
       return(
            this.renderInput()
        )
    }
}