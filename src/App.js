import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react'
import TodoList from './components/todo-list'
import TodoForm from './components/todo-form'
 
import "react-datepicker/dist/react-datepicker.css";
import TodoCount from './components/todo-count';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { todos: [],error: '', value:'', due:'' };
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCompleted= this.toggleCompleted.bind(this);
    this.getPendingCount = this.getPendingCount.bind(this);
    
  }
  getPendingCount(){
    //return count of total pending tasks
    var count = 0;
    if(this.state.todos.length === 0){
      return 0;
    }
     this.state.todos.map(todo => {
      if (todo.completed === false) {
        count ++;
      }
      return count;
    });
    return parseInt(count);
  }

  toggleCompleted(id){
    //this function toggles completed boolean and sets it to the todos state
    // eslint-disable-next-line array-callback-return
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      if(todo)
      return todo;
    });
    this.setState({ todos: todos });
 }
  handleChange(e) {
    //function to handle changes in input value - task name
    this.setState({ value: e.target.value });
  }
  handleDateChange(date) {
    //date object has lot of info so it needs to split and set to string as shown below 
    //getMonth starts from 0 for January, so getMonth()+1 gives correct month in number
    this.setState({ due: date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()  });
  }
  handleSubmit(e) {
    //on form submit this function is called to add new task to the todos state
    e.preventDefault();
    if (this.state.value.length === 0 ||this.state.due === '' ||this.state.due === undefined) {
      //dont do anything for invalid input, return back to app
      return;
    }
    //else part to handle valid input and add them to the list 
    const newTask = {
      value: this.state.value,
      due: this.state.due,
      completed: false,
      id: this.state.todos.length +1
    };
    this.setState(state => ({
      todos: state.todos.concat(newTask),
      error:'',
      value: '',
      due:''
    }));
  }

  render(){ 
    //renders composition of components - todo-form,todo-count,todo-list
    return (
      <div className="App w3-full w3-card w3-light-grey"  style={{height:"100%"}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="w3-container">
          <TodoForm 
            value={this.state.value}
            due={this.state.due} 
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange} 
            handleDateChange={this.handleDateChange}>            
          </TodoForm>
          <TodoCount count={this.getPendingCount()}></TodoCount>
          <TodoList todos={this.state.todos} onClick={this.toggleCompleted}></TodoList>
        </div>
      </div>
    )}
}  

export default App;
