import React from 'react';
import { uniqueId } from '../../util/idGenerator';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
     };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    const { receiveTodo } = this.props;
    let todo = Object.assign({}, this.state, { id: uniqueId() });
    event.preventDefault();
    receiveTodo( todo );
    this.setState({
      title: "",
      body: "",
      done: false
    });
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  render(){

    return(
      <div>
        <form className="todo-form" onSubmit={this.handleSubmit}>
    <label>Title:
      <input
        className="input"
        ref="title"
        value={this.state.title}
        placeholder="buy milk"
        onChange={this.update('title')}
        required/>
    </label>
    <label>Body:
      <textarea
        className="input"
        ref="body"
        cols='20'
        value={this.state.body}
        rows='5'
        placeholder="2% or whatever is on sale!"
        onChange={this.update('body')}
        required></textarea>
    </label>
    <button className="create-button">Create Todo!</button>
  </form>
      </div>
    );
  }
}

export default TodoForm;

// <input type = 'hidden' value={this.state.todo.id}/>
// <input type = 'hidden' value={this.state.todo.id} />
//
// {
//   this.props.todo.map((todo, idx) => (
//     <li key={idx}>
//       {todo}
//     </li>
//   ))
// }
