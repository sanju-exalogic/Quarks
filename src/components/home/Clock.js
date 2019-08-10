import React from 'react';
import {Link} from 'react-router-dom';
import Common from '../Common.js'
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      date: (new Date()).toLocaleDateString('en-US'),
      time: new Date().toLocaleTimeString('en-US')
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString('en-US')
    });
  }
  showDate(e){
    if(this.state.show){
      this.setState({show: false})
    }else
    {
      this.setState({show: true})
    }
  }
  render() {
    const show = this.state.show
    return (
      <div>
      <Common />
        <div class="center-block">
        <a href="#" onClick={this.showDate.bind(this)}>
          Click to {show ? "hide" : "view"} Date : {this.state.show && this.state.date}
        </a>
          <p className="App-clock">
            The time is {this.state.time}.
          </p>
        </div>
      </div>
    );
  }
}
export default Clock;