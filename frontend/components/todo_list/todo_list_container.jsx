import {connect} from 'react-redux';
import TodoListItem from './todo_list_items';
import allTodos from '../../reducers/selectors';
import {receiveTodo, receiveTodos, removeTodo} from '../../actions/todo_actions';
import TodoForm from './todo_form';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodos: () => dispatch(receiveTodos()),
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);
