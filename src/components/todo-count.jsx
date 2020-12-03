import React from 'react';

class TodoCount extends React.Component{


    render(){
        return(
        <div className="w3-container w3-light-grey w3-padding-16">

          <h6 className="w3-right w3-margin-right">
            {this.props.count} task(s)
          </h6>
        </div>
        );
    }
}
export default TodoCount; 