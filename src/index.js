import React, { Component } from 'react';

class Repeater extends Component {
  render() {
    const { n = 5 } = this.props;
    return (
        <React.Fragment>
          {repeat(n, this.props.children)}
        </React.Fragment>
    );
  }
}

function repeat(n, App) {
      let arr = [];
      for ( let i = 0; i < n; i++ ) {
        arr[i] = (<React.Fragment key={i}>
                      {App}
                  </React.Fragment>);
      }
      return arr;
}

export default Repeater;
