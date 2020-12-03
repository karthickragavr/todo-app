import React from 'react'
import ListItem from  './list-item'

class TodoList extends React.Component {

   
    render() {
        //renders todolist with listitems; todo-list is composed of list-item component;
      return (
        <div className="w3-container w3-light-grey w3-padding-16">
          <ul className="w3-ul">
                {this.props.todos.map((task) =>
                    <ListItem key={task.id} task={task} onClick={this.props.onClick}/>
                )}
        </ul>
        </div>
      );
    }
  }
  export default TodoList;
