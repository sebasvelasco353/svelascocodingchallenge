# **svelascocodingchallenge V0.0.0**

> Coding Challenge created for mooveIt as part of the developer assessment

## **The Challenge**

Design and implement a subset of a React UI library. The library should also support themes and provide a default one, allowing the clients to write their own custom themes and to override existing ones.

Also, as part of this challenge, you should build a demo application showcasing each component’s features, sample code and usage documentation.

## **Components to design and implement**

- Button

- Input Text

- Input Number: Allows only numbers, and formats them

- Select Input: It should allow single and multiple selection

- Autocomplete: It should work independently of the data source (being a REST api, or an IndexedDB for example)

Each component should have a set of unit tests covering each feature / behavior.
The demo app should have a README describing how to install its dependencies, build, and run.
Use redux as state manager for the demo app and react-router for page routing.

## **Run example (WIP)**

```bash

cd ./svelascocodingchallenge/example

npm install

npm start

```

## **Usage**

```jsx

import React, { Component } from 'react';
import { Input } from 'svelascocodingchallenge';

class Example extends Component {
  handleInputNumberChange(e) {
    this.setState({
      inputNumber: e.target.value
    });
  }
  render() {
    return <Input type="number" value={this.state.inputNumber} handleChange={this.handleInputNumberChange.bind(this)} placeholder="number Input"/>
  }
}

```

## **License**

MIT © [sebasvelasco353](https://github.com/sebasvelasco353)