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
    
    checkNumbers(e){
        let numberValue = e.target.value;
        if ((Number(numberValue)) || (numberValue == "")) {
            // TODO: let formattedNumber = new Intl.NumberFormat().format(numberValue);
            this.props.handleChange(numberValue);
        }
    }
    renderInput(){
    switch (this.props.type) {
        case "number":
                return (
                    // TODO: FIX responsive its showing regular keyboard, need to change it to numbers only
                    <InputStyled 
                        value={this.props.value || ''} 
                        pattern="[0-9]+" 
                        onChange={this.checkNumbers.bind(this)} 
                        placeholder={this.props.placeholder ? this.props.placeholder : "Numeric Input"} />
                )
            break;
        default:
                return (
                    <InputStyled 
                        value={this.props.value || ''} 
                        onChange={(event) => this.props.handleChange(event.target.value)} 
                        placeholder={this.props.placeholder ? this.props.placeholder : "Text Input"} />
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