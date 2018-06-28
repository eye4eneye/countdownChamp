// Authored By Terrence Whaley on June 28th, 2018...

import React, {Component} from 'react';
import './App.css';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

/** Makes the timer count down **/
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

/** Adding a Zero to the beginning
of any number less that 10 **/
  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

/** Here is the clock function that calculates
the time until the date you want see
*/
    getTimeUntil(deadline) {
      const time = Date.parse(deadline) - Date.parse(new Date());
      const seconds = Math.floor((time/1000) % 60);
      const minutes = Math.floor((time/1000/60) % 60);
      const hours = Math.floor((time/1000*60*60) % 24);
      const days = Math.floor(time/(1000*60*60*24));

      //** Displays updated values of the time //
      this.setState({days, hours, minutes, seconds});
    }
  render() {
    return(
    <div>
    <div className="Clock-days"> {this.leading0(this.state.days)} days</div>
    <div className="Clock-hours"> {this.leading0(this.state.hours)} hours</div>
    <div className="Clock-minutes"> {this.leading0(this.state.minutes)} minutes</div>
    <div className="Clock-seconds"> {this.leading0(this.state.seconds)} seconds</div>
    </div>
    )
  }

}

export default Clock;
