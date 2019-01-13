import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import MatterPeople from './components/matterPeople';
import MatterPeopleV2 from './components/matterPeopleV2';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <MatterPeople>
          {option => (
            <ReactEcharts
              option={option}
              // notMerge={true}
              // lazyUpdate={true}
              // theme="theme_name"
              style={{ height: '700px', width: '100%' }}
              // onChartReady={this.onChartReadyCallback}
              // onEvents={EventsDict}
              // opts={}
            />
          )}
        </MatterPeople>
        <MatterPeopleV2>
          {option => (
            <ReactEcharts
              option={option}
              style={{ height: '700px', width: '100%' }}
            />
          )}
        </MatterPeopleV2>
      </div>
    );
  }
}

export default App;
