# react-simple-repeater &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/sandipanghosh1993/react-simple-repeater/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react-simple-repeater.svg?style=flat)](https://www.npmjs.com/package/react-simple-repeater) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/sandipanghosh1993/react-simple-repeater/compare)
## About
Repeat react components with minimal overhead
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
