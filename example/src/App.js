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
    this.setState({
      inputNumber: number
    });
  }
  render() {
    return (
      <div>
        <div>
          <Button disabled handleClick={() => console.log('funciona pero no deberia pq es disabled')}>
            Disabled
          </Button>
          <Button type="primary" handleClick={() => console.log('funciona Boton principal')}>
            Primary
          </Button>
          <Button handleClick={() => console.log('funciona')}>
            Regular
          </Button>
        </div>
        <div>
          <Input value={this.state.inputText} handleChange={this.handleInputChange.bind(this)} placeholder="Example Text Input"/>
          <Input type="number" value={this.state.inputNumber} handleChange={this.handleInputNumberChange.bind(this)} placeholder="Example number Input"/>
        </div>
      </div>
    )
  }
}