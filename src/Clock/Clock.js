import React from 'react';


class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }



  render(){
  return (
    <div className="Clock">
          current time is {this.state.date.toString()};
    </div>
  );
}
}

export default Clock;
