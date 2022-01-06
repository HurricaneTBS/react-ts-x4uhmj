import { Component } from 'react';
import React, { Fragment } from 'react';
type Props = {
  todos: Array<string>;
};
export default class Root extends Component<Props> {
  render() {
    const todos = this.props.todos;

    const todoList =
      todos.length > 0 ? (
        todos.map((todo) => <p key={todo}>{todo}</p>)
      ) : (
        <p>todos是空的</p>
      );
    return <Fragment>{todoList}</Fragment>;
  }
}
