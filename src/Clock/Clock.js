import React from 'react';
import './Clock.css';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.changeTime = this.changeTime.bind(this);
  }

  changeTime(){
    this.setState({
      date: new Date()
    });
  }


  render(){
  return (
    <div className="Clock" onClick={this.changeTime}>
          current time is {this.state.date.toString()};
    </div>
  );
}
}

export default Clock;
