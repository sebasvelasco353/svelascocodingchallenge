import React, { Component } from 'react'

import { Button, Input, Select } from 'svelascocodingchallenge'
import 'svelascocodingchallenge/dist/index.css'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      singleSelectOptions: [
        { value: 'MacbookPro', label: 'Macbook Pro' },
        { value: 'DellXPS13_W', label: 'Dell XPS 13 (Windows)' },
        { value: 'DellXPS13_U', label: 'Dell XPS 13 (Ubuntu)' }
      ]
    }
  }
  handleInputChange(text) {
    this.setState({
      inputText: text
    });
  }
  handleInputNumberChange(number) {
    console.log("desde app ", number);
    this.setState({
      inputNumber: number
    });
  }
  handleSingleSelectValueChange(selected){
    console.log(selected);
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
        <div>
          <Select value={this.state.singleSelectValue} options={this.state.singleSelectOptions} onChange={this.handleSingleSelectValueChange.bind(this)}/>
        </div>
      </div>
    )
  }
}