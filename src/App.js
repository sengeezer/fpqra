import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React To Dos</h2>
        </div>
        <p className="App-intro">
          A simple Todo.
        </p>
        <div className="Todo-App">
          <form>
            <input type="text" />

          </form>
          <div className="Todo-List">
            <ul>
              <li><input type="checkbox" /> Item 1</li>
              <li><input type="checkbox" /> Item 2</li>
              <li><input type="checkbox" /> Item 3</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
