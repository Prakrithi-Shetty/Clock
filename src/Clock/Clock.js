import React from 'react';
import './Clock.css';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.state = {shitIWantToDisplay:  time};
    this.changeTime = this.changeTime.bind(this);
  }

  changeTime(){
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.setState({
      shitIWantToDisplay: time,
    });
  }


  render(){
  return (
    <div className="Clock" onClick={this.changeTime}>
         Hi {this.props.name} current time is {this.state.shitIWantToDisplay}
    </div>
  );
}
}

export default Clock;
