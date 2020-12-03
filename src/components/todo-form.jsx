import React from 'react'

import DatePicker from "react-datepicker";


class TodoForm extends React.Component {

  
    render() {
        //renders form to add task to the list
      return (
        <div  className="w3-container w3-light-grey w3-padding-16 align-center">
          <form className="form-inline" onSubmit={this.props.handleSubmit}>
            <div className="form-row w3-row w3-margin-top">
            <div className="col w3-col"> 
                <div className="form-group">
                <label htmlFor="new-todo" className="sr-only">
                        Task
                </label>
                    <input
                        id="new-todo"
                        type="text"
                        placeholder="Task name"
                        className="w3-input form-control"
                        onChange={this.props.handleChange}
                        value={this.props.value}
                        autoComplete="off"
                    />
                </div>
                </div>
                <div className="col w3-col">
                <div className="form-group">
                <label htmlFor="new-todo-date"
                            className="sr-only">
                        Date
                    </label>
                    <DatePicker
                        id="new-todo-date"
                        type="date"
                        dateFormat="yyyy/MM/dd"
                        className="form-control w3-input"
                        placeholderText="YYYY-MM-DD"
                        minDate={new Date()}
                        maxDate={new Date(new Date().getFullYear()+5,new Date().getMonth()+1,new Date().getDate())}
                        onChange={this.props.handleDateChange}
                        value={this.props.due}
                        autoComplete="off"
                    />
                </div>
                </div>
                <div className="col w3-col">
                <div className="form-group">
                    <label htmlFor="btnSubmit"className="sr-only">Add</label>
                    <button type="submit" id="btnSubmit" className="btn btn-primary w3-btn w3-blue">Add</button> 
                </div>
                </div>
                </div>
            </form>
        </div>
      );
    }
  }
  export default TodoForm;
