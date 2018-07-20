import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas name="Yoshi" age="20" belt="green" />
        <Ninjas name="Ryu" age="30" belt="black" />
      </div>
    );
  }
}

export default App;
