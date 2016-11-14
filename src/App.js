import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import DateTime from 'react-datetime';

class CurrentDateTime extends React.Component {
  constructor() {
    super()
    this.state = {date: moment()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: moment()
    });
  }

  render() {
    return <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">The current date and time is</h3>
      </div>
      <div className="panel-body text-center">
        {this.state.date.format()}
      </div>
    </div>
  }
}

class DateTimeCalculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {dateTime: null}
  }

  render() {
    let dateTimeElement = <DateTime onChange={((selectedDateTime) => this.setState({dateTime: selectedDateTime}))}/>
    let selectedDateTimeString
    if (this.state.dateTime != null) {selectedDateTimeString = 'New Date: ' + this.state.dateTime.format()}

    return (
      <div className="component">
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active" id="legacy_button"><a href="#legacy" data-toggle="tab">Legacy</a></li>
          <li role="presentation" id="new_button"><a href="#new" data-toggle="tab">New</a></li>
        </ul>

        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="legacy">
            <p><br />
            Please pick the legacy date and time below.
            </p>
              <div className="input-group">
                <span className="input-group-addon">Legacy-Date</span>
                {dateTimeElement}
              </div>
            <h3>{selectedDateTimeString}</h3>
          </div>
          <div role="tabpanel" className="tab-pane" id="new">...</div>
        </div>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1>The time is now!</h1>
          <p className="lead">Make our time great again! Help the poor developer writing cleaner code by using the new time for all your appointments. 
            This tool will help the clueless people to convert the new time to the old unconvenient legacy time.
          </p>
          <CurrentDateTime />
        </div>

        <DateTimeCalculator />
      </div>
    );
  }
}

export default App;
