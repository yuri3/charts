import React from 'react';
import PropTypes from 'prop-types';

const mockDataSource = [
  {
    id: '1',
    name: 'Christopher J. Wiener, Associate',
    percentage: 14,
    color: 'rgb(75,114,174)',
  },
  {
    id: '2',
    name: 'Camila A. Tapernoux, Associate',
    percentage: 13,
    color: 'rgb(195,211,234)',
  },
  {
    id: '3',
    name: 'Shaelyn K. Dawson, Associate',
    percentage: 8,
    color: 'rgb(58,83,142)',
  },
  {
    id: '4',
    name: 'Christopher L. Robinson, Associate',
    percentage: 6,
    color: 'rgb(184,196,224)',
  },
  {
    id: '5',
    name: 'Dina Roumiantseva, Associate',
    percentage: 4,
    color: 'rgb(220,224,239)',
  },
  {
    id: '6',
    name: 'Jason Andrew Crotty, Attorney',
    percentage: 1,
    color: 'rgb(214,188,161)',
  },
  {
    id: '7',
    name: 'Christopher M. Meier, Snr Paralegal',
    percentage: 5,
    color: 'rgb(246,228,164)',
  },
  {
    id: '8',
    name: 'Daisy Belle Visitacion, Paralegal',
    percentage: 3,
    color: 'rgb(248,231,168)',
  },
  {
    id: '9',
    name: 'Diana B. Kruze, Partner',
    percentage: 17,
    color: 'rgb(125,146,100)',
  },
  {
    id: '10',
    name: 'Arturo J. Gonzalez, Partner',
    percentage: 13,
    color: 'rgb(180,204,152)',
  },
  {
    id: '11',
    name: 'Alexandria A. Amezcua, Partner',
    percentage: 9,
    color: 'rgb(203,220,185)',
  },
  {
    id: '12',
    name: 'Michael A. Jacobs, Partner',
    percentage: 6,
    color: 'rgb(228,237,218)',
  },
  {
    id: '13',
    name: 'William I. Schwartz, Partner',
    percentage: 1,
    color: 'rgb(188,203,167)',
  },
];

const getData = (dataSource) => {
  return {
    legendData: dataSource.map(d => d.name),
    seriesData: dataSource.map(({ name, percentage, color }) => ({ name, value: percentage, color })),
    selected: {}
  }
};

const data = getData(mockDataSource);

const option = {
  title : {
    text: 'Timekeeper Percentage 2',
    // subtext: '',
    x:'center'
  },
  tooltip : {
    // show: false,
    trigger: 'item',
    formatter: '{b} {d}%'
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    top: 170,
    right: 0,
    data: data.legendData,
    selected: data.selected
  },
  series : [
    {
      // name: '',
      animation: false,
      type: 'pie',
      radius : '55%',
      center: ['45%', '50%'],
      data: data.seriesData,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',

        },
        color: (params) => {
          // console.log('params', params)
          return params.data.color
        }
      },
    },
  ],
};

const TimekeeperPercentageV2 = ({ children }) => {
  return (
    <div>
      {children(option)}
    </div>
  )
};

TimekeeperPercentageV2.defaultProps = {
  data: [],
};

TimekeeperPercentageV2.propTypes = {
  data: PropTypes.array,
  render: PropTypes.func,
};

export default TimekeeperPercentageV2;
