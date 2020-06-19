import React from 'react'

import { Button, TextInput } from 'svelascocodingchallenge'
import 'svelascocodingchallenge/dist/index.css'

const App = () => {
  return (
    <div>
      <div>
        <Button handleClick={() => console.log('funciona')}>
        Normal
        </Button>
        <Button disabled style="primary" handleClick={() => console.log('funciona')}>
          Primary
        </Button>
      </div>
      <div>
        <TextInput placeholder="Text Input"/>
      </div>
    </div>
  );
}

export default App
