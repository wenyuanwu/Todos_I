import React from 'react';
import { Provider } from 'react-redux';
import allTodos from '../reducers/selectors';
import receiveTodo from '../actions/todo_actions';
import TodoListItemContainer from './todo_list/todo_list_container';


const Root = ({store}) => {
  return (
    <Provider store={store}>
      <TodoListItemContainer />
    </Provider>
  );
};

export default Root;
