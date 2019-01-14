import React from 'react'
import PropTypes from 'prop-types'

const mockDataSource = {
  l100: 712402.5,
  l110: 102870.0,
  l110_1: 2475.0,
  l110_2: 66607.5,
  l110_3: 33787.5,
  l120_1: 87306.25,
  l120_2: 0.0,
  l120: 213428.75,
  l120_3: 126122.5,
  l130: 278641.25,
  l130_1: 59711.25,
  l130_2: 218930.0,
  l140_1: 13212.5,
  l140: 13212.5,
  l150_1: 945.0,
  l150: 945.0,
  l160_1: 78238.75,
};

const getData = (dataSource) => {
  const keys = Object.keys(dataSource);

  return {
    legendData: keys.map(key => key),
    seriesData: keys.map(key => ({ name: key, value: dataSource[key] })),
    selected: {}
  }
};

const data = getData(mockDataSource);

const barOption = {
  title : {
    text: 'Costs Per Phase',
    // subtext: '',
    x:'center'
  },
  color: 'rgb(85,114,196)',
  tooltip : {
    trigger: 'axis',
    axisPointer : {
      type : 'shadow',
    },
    formatter: '{b}, ${c}',
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis : [
    {
      type : 'category',
      data : data.legendData,
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis : [
    {
      type : 'value',
      axisLabel: {
        formatter: '${value}'
      },
      boundaryGap: [0, '50%']
    }
  ],
  series : [
    {
      // name:'',
      type:'bar',
      barWidth: '60%',
      data: data.seriesData,
    }
  ]
};

const pieOption = {
  title : {
    text: 'Costs Per Phase',
    // subtext: '',
    x:'center'
  },
  tooltip : {
    // show: false,
    trigger: 'item',
    formatter: '{b}, ${c}, {d}%'
  },
  legend: {
    // type: 'scroll',
    type: 'plain',
    bottom: '3%',
    data: data.legendData,
    selected: data.selected
  },
  series : [
    {
      // name: '',
      animation: false,
      type: 'pie',
      radius : '55%',
      center: ['50%', '50%'],
      data: data.seriesData,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',

        },
        /* color: (params) => {
          // console.log('params', params)
          return params.data.color
        } */
      },
      label: {
        normal: {
          formatter: '${c}, {d}%'
        },
      },
    },
  ],
};

const CostsPerPhase = ({ renderBarChart, renderPieChart }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '400px' }}>{renderBarChart(barOption)}</div>
      <div style={{ flex: '1', minWidth: '400px' }}>{renderPieChart(pieOption)}</div>
    </div>
  )
};

CostsPerPhase.defaultProps = {
  data: {}
};

CostsPerPhase.propTypes = {
  data: PropTypes.object,
  renderBarChart: PropTypes.func,
  renderPieChart: PropTypes.func,
};

export default CostsPerPhase;
