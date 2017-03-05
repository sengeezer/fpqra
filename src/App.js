import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          name: 'Item 1',
          isComplete: true
        },
        {
          id: 2,
          name: 'Item 2',
          isComplete: false
        },
        {
          id: 3,
          name: 'Item 3',
          isComplete: false
        }
      ],
      currentTodo: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      currentTodo: e.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <p className="App-intro">
          A simple Todo App.
        </p>
        <div className="Todo-App">
          <TodoForm handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
