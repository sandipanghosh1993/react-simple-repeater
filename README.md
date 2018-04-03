# About
Repeat react components with minimal overhead.
## Usage
```
npm install react-simple-repeater --save

```

```
import React, { Component } from 'react';
import Repeater from 'react-simple-repeater';

class App extends Component {

    render() {               
        return (            
            <Repeater n={100}>
            // YOUR HAPPY LITTLE REACT COMPONENT
            </Repeater>
        )
    }
}

export default App

```
