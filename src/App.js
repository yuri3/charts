import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import TimekeeperPercentage from './components/timekeeperPercentage';
import TimekeeperPercentageV2 from './components/timekeeperPercentageV2';
import TimekeeperClassificationPercentage from './components/timekeeperClassificationPercentage';
import CostsPerPhase from './components/costsPerPhase';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TimekeeperPercentage>
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
        </TimekeeperPercentage>
        <TimekeeperPercentageV2>
          {option => (
            <ReactEcharts
              option={option}
              style={{ height: '700px', width: '100%' }}
            />
          )}
        </TimekeeperPercentageV2>
        <TimekeeperClassificationPercentage>
          {option => (
            <ReactEcharts
              option={option}
              style={{ height: '700px', width: '100%' }}
            />
          )}
        </TimekeeperClassificationPercentage>
        <CostsPerPhase
          renderBarChart={barChartOption => (
            <ReactEcharts
              option={barChartOption}
              style={{ height: '700px', width: '100%' }}
            />
          )}
          renderPieChart={pieChartOption => (
            <ReactEcharts
              option={pieChartOption}
              style={{ height: '700px', width: '100%' }}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
