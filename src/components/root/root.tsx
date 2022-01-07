import { Component } from 'react';
import React, { Fragment } from 'react';
import { Actions } from './index';
type Props = {
  todos: Array<string>;
  actions: Actions;
};
export default class Root extends Component<Props> {
  componentDidMount(){
    this.props.actions.addTodo("==---");
  }
  render() {
    console.log(this.props);
    const { actions } = this.props;
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
