// Authored By Terrence Whaley on June 28th, 2018.
import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Deadline to my 30th birthday.
      deadline: 'July 9, 2025',
      newDeadLine: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadLine});
  }


  render() {
    return (
  <div className="App">
      <div className= "App-title">
      Countdown to {this.state.deadline}
      </div>
      <Clock
      deadline = {this.state.deadline}
      />
      <Form inline>
        <FormControl
          className = "Deadline-input"
          placeholder='new date'
          onChange ={event => this.setState({newDeadline: event.target.value})}
        />
      <Button onClick = {() => this.changeDeadline()}>
        Submit
      </Button>
    </Form>
  </div>
)
}
}

export default App;
