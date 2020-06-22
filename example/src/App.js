import React, { Component } from 'react'

import { Button, Input } from 'svelascocodingchallenge'
import 'svelascocodingchallenge/dist/index.css'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: "",
      inputNumber: "",
    }
  }
  handleInputChange(text) {
    this.setState({
      inputText: text
    });
  }
  handleInputNumberChange(number) {
    console.log(number)
    this.setState({
      inputNumber: number
    });
  }
  render() {
    return (
      <div>
        <div>
          <Button disabled style="primary" handleClick={() => console.log('funciona')}>
            Primary
          </Button>
          <Button handleClick={() => console.log('funciona')}>
            Regular
          </Button>
        </div>
        <div>
          <Input value={this.state.inputText} handleChange={this.handleInputChange.bind(this)} placeholder="Text Input"/>
          <Input type="number" value={this.state.inputNumber} handleChange={this.handleInputNumberChange.bind(this)} placeholder="number Input"/>
        </div>
      </div>
    )
  }
}