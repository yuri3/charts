import React from 'react'
import PropTypes from 'prop-types'

const mockDataSource = [
  {
    id: '1',
    name: 'Colberg, Andres',
    total: 26122,
    color: 'rgb(85,115,185)',
  },
  {
    id: '2',
    name: 'Cordero, Corinne',
    total: 13987,
    color: 'rgb(211,134,80)',
  },
  {
    id: '3',
    name: 'Estrella, Alberto G',
    total: 3895,
    color: 'rgb(165,165,165)',
  },
  {
    id: '4',
    name: 'Ortiz, Sarihana',
    total: 12574.53,
    color: 'rgb(238,194,91)',
  },
  {
    id: '5',
    name: 'Rivera, Daphne',
    total: 3876,
    color: 'rgb(116,154,204)',
  },
  {
    id: '6',
    name: 'Viera, Yarimel',
    total: 4009,
    color: 'rgb(135,170,96)',
  },
  {
    id: '7',
    name: 'Alderman, Craig',
    total: 21589.54,
    color: 'red',
  },
];

const getData = (dataSource) => {
  return {
    legendData: dataSource.map(d => d.name),
    seriesData: dataSource.map(({ name, total, color }) => ({ name, value: total, color })),
    selected: {}
  }
};

const data = getData(mockDataSource);

const option = {
  title : {
    text: 'Timekeeper',
    // subtext: '',
    x:'center'
  },
  tooltip : {
    // show: false,
    trigger: 'item',
    formatter: '{b},<br/>${c}, {d}%'
  },
  legend: {
    type: 'scroll',
    // orient: 'vertical',
    bottom: 150,
    data: data.legendData,
    selected: data.selected
  },
  series : [
    {
      // name: '',
      animation: false,
      type: 'pie',
      radius : '55%',
      center: ['50%', '40%'],
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
      /*label: {
        // show: false,
        normal: {
          position: 'inside',
          // backgroundColor: 'red',

          formatter: [
              '{name|{b}}',
              '${value|{c}}, {percentage|{d}}%',
          ].join('\n'),
          color: '#fff',
          rich: {
              name: {
                color: '#fff',
                padding: [5, 0, 0, 0],
                // align: 'left'
              },
              value: {
                color: '#fff',
              },
              percentage: {
                color: '#fff',

              }
          },
        },
      }, */
      /* labelLine: {
          normal: {
              show: false
          }
      }, */
    },
  ],

};

const MatterPeople = ({ children }) => {
  return (
    <div>
      {children(option)}
    </div>
  )
};

MatterPeople.defaultProps = {
  data: []
};

MatterPeople.propTypes = {
  data: PropTypes.array,
  render: PropTypes.func,
};

export default MatterPeople;
