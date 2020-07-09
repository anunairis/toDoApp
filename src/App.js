import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"


import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import uuid from 'react-uuid';


import About from "./components/pages/About";

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  // TOGGLE THE TICK AND TODO LIST AS COMPLETE
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // DELETE BUTTON
  delTodo = (id) => {
    console.log("just deleted")
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  // ADD THE TODO TO THE LIST
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }


  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">

            <Header />

            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo} />
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />

          </div>
        </div >
      </Router>
    );
  }
}



export default App;

