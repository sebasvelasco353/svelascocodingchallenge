import React from 'react'

import { Button } from 'svelascocodingchallenge'
import 'svelascocodingchallenge/dist/index.css'

const App = () => {
  return (
    <div>
      <Button handleClick={() => console.log('funciona')}>
       Normal
      </Button>
      <Button primary handleClick={() => console.log('funciona')}>
        Primary
      </Button>
    </div>
  );
}

export default App
