import React, { Component } from 'react';

class Time extends Component {
  constructor(props) {
    super(props);
    this.dateTime = new Date;
    // I only query for the time once, here on construction of page
    this.fiveSecTick = this.fiveSecTick.bind(this);
    this.timeChange = this.timeChange.bind(this);

    this.state = {
      hour: this.dateTime.getHours(),
      minute: this.dateTime.getMinutes(),
      second: this.dateTime.getSeconds()
    };

    this.fiveSecTick();
  }

  timeChange () {
    this.setState({second: this.state.second+1});
    if (this.state.second === 60) {
      this.setState({second: 0, minute: this.state.minute+1});
    }
    // else if
    if (this.state.minute === 60) {
      this.setState({minute: 0, hour: this.state.hour+1});
    }
  }

  fiveSecTick () {
    this.id = setInterval(this.timeChange, 1000);
  }

  render () {
    return (
      <div className="time">
        <div className="time-detail">
          {this.state.hour <=12? this.state.hour : this.state.hour-12}:
          {this.state.minute <= 9? `0${this.state.minute}`: this.state.minute}:
          {this.state.second <= 9? 0+this.state.second : this.state.second}
          {this.state.hour <= 12? "AM" : "PM"}
        </div>
      </div>
    );
  }

}

export default Time;
