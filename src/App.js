import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList, Toolbar} from './components/todo';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './lib/todoHelpers';
import {pipe, partial} from './lib/utils';

class App extends Component {
  state = {
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

  static contextTypes = {
    route: React.PropTypes.string
  };

  handleRemove = (id, evt) => {
    evt.preventDefault();

    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({todos: updatedTodos});
  };

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos));
    const updatedTodos = getUpdatedTodos(id, this.state.todos);

    this.setState({todos: updatedTodos});
  };

  handleInputChange = (e) => {
    this.setState({
      currentTodo: e.target.value
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const newId = generateId();
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false};
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    });
  };

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      errorMessage: 'Please specify a todo name'
    });
  };

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const displayTodos = filterTodos(this.state.todos, this.context.route);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}
            />
          <Toolbar />
          <TodoList
            handleToggle={this.handleToggle}
            todos={displayTodos}
            handleRemove={this.handleRemove}
          />
        </div>
      </div>
    );
  }
}

export default App;
