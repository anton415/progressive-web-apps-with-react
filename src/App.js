import React, { Component } from 'react';
import './app.css';

class App extends Component {
  greeting = 'Hello from React!!';

  logGreeting = () => {
    console.log('Hello!');
  }

  render() {
    this.logGreeting();
    return <h1>{this.greeting}</h1>;
  }
}

export default App;
