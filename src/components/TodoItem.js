import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () =>{
    return {
      backgroundColor : '#f4f4f4',
      padding : '10px',
      borderBottom: '1px #333 dotted',
      textDecoration : this.props.todo.completed ?
      'line-through' : 'none'
    }
  }
  

  render() {
    const {id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type = 'checkbox' onChange={this.props.markComplete.bind
          (this , id)}/> {" "}
          {title}
          <button onClick={this.props.delTodo.bind
          (this , id)} style = {btnStyle}>x</button>
          </p>
      </div>
    )
  }
}

const btnStyle ={
  background : 'blue',
  color : '#fff',
  border: 'none',
  padding: '5px 9px',
  cursor: 'pointer',
  float: 'right',
  borderRadius : '50%'
}
TodoItem.propTypes = {
  todo : PropTypes.object.isRequired,
  markComplete : PropTypes.func.isRequired,
  delTodo : PropTypes.func.isRequired
}


export default TodoItem
