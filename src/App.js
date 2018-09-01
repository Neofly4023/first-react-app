import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        {
          this.is_text? 
          <img src={logo} className="App-logo" alt="logo" /> 
          : <h1>Logo placeholder</h1>
        }
          <h1 className="App-title">Welcome to the jungle</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  componentWillMount() {
    console.log("Will mount");
    this.is_text = false;
  }

  componentWillMount() {
    console.log("Did mount");
  }

}

export default App;
