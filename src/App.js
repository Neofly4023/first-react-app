import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';

class App extends Component {
  constructor(props){
    super(props);
    this.changeName = this.changeName.bind(this);
    this.state = { username : ""}
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {
          this.is_text? 
          <img src={logo} className="App-logo" alt="logo" /> 
          :<h1>Placeholder</h1>
        }
          <HelloWorld name = {this.state.username}/>
          <input type="text" onChange = {(e) => this.changeName(e)}/>
          <h1 className="App-title">Welcome to the jungle</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  changeName(str) {
    //console.log(str.target.value)
    this.setState({username : str.target.value});
  }

  componentWillMount() {
    console.log("Will mount");
    this.is_text = true;
  }

  componentDidMount() {
    console.log("Did mount");
  }

}

export default App;
