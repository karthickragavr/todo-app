import React from 'react'
class ListItem extends React.Component {

    render() {
        //renders list items with conditional formatting
      return (
        <li className="w3-padding-16" style={{cursor:"pointer"}}
            onClick={() => {
                            this.props.onClick(this.props.task.id);
                          }}> 
            <span>[{this.props.task.id}]</span>
            <span className={this.props.task.completed ? 'isCompleted' : ''} >
                <span> {this.props.task.value} </span>
                -
                <span> {this.props.task.due}</span>
            </span>
            {!this.props.task.completed && /*<---- This code does the contional rendering of the button 'x' to toggle task complete, 
                if task is completed 'x' disappears */
                <span className="w3-right w3-margin-right" style={{cursor:"pointer"}} 
                onClick={() => {this.props.onClick(this.props.task.id);
            }}>&times;</span>
            }
        </li>
      );
    }
  }
  export default ListItem;
