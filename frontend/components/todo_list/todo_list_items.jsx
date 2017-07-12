import React from 'react';
import TodoForm from './todo_form';


class TodoListItem extends React.Component {
  constructor(props){
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove(todo){
    return event => this.props.removeTodo( todo );
  }

  render(){
    const { todos, receiveTodo, removeTodo } = this.props;

    const titleList = this.props.todos.map( (todo, idx) =>
      <li key={todo.id}>{todo.title}
      <button onClick={ this.remove(todo) }>Delete Todo</button>
      </li>

    );
    return(
      <div>
        <h1>title list</h1>
          <ul>
            {titleList}
          </ul>
          <TodoForm receiveTodo={ receiveTodo } />
      </div>
    );
  }
}

export default TodoListItem;
