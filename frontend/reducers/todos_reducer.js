import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions';

import { merge } from 'lodash';
const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  let newState;
  switch(action.type) {
    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach(todo => {newState[todo.id]= todo;});
      return newState;

    case RECEIVE_TODO:
      return merge( {}, state, {[action.todo.id]: action.todo} );

    case REMOVE_TODO:
      newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;

    default:
      return state;
  }//switch
}; // todosReducer

export default todosReducer;
