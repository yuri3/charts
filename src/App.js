import React, { Component } from 'react';
import MatterPeople from './components/matterPeople';
import ReactEcharts from 'echarts-for-react';
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
              style={{ height: '600px', width: '100%' }}
              // onChartReady={this.onChartReadyCallback}
              // onEvents={EventsDict}
              // opts={}
            />
          )}
        </MatterPeople>
      </div>
    );
  }
}

export default App;
