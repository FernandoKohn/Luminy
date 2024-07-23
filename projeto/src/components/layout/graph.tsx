import styles from './Graph.module.css'
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import { useEffect } from 'react';

export const Graph = ({ Budget, userData }) => {
  
  var values: any = {}

  for (var visa of userData.visa) {
    if (values[visa.id] == undefined) {
      values[visa.id] = 0
    }
    values[visa.id] += parseInt(visa.valor)
    
  }

  for (var mastercard of userData.mastercard) {
    if (values[mastercard.id] == undefined) {
      values[mastercard.id] = 0
    }
    values[mastercard.id] += parseInt(mastercard.valor)
    
  }

  for (var elo of userData.elo) {
    if (values[elo.id] == undefined) {
      values[elo.id] = 0
    }
    values[elo.id] += parseInt(elo.valor)
    
  }

  console.log(values)
  
  const option = {
    color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
    radar: [
      {
        indicator: [
          { text: 'Comida' },
          { text: 'Compras' },
          { text: 'Finanças' },
          { text: 'Lazer' },
          { text: 'Viagem' }
        ],
        center: ['50%', '50%'],
        radius: 130,
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        axisName: {
          formatter: '{value}',
          color: '#000000'
        },
        splitArea: {
          areaStyle: {
            color: ['rgba(116, 116, 116, 0)', 'rgba(116, 116, 116, 0)', 'rgba(116, 116, 116, 0)', 'rgba(116, 116, 116, 0)'],
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 10
          }
        },
        axisLine: {
          lineStyle: {
            color: '#8f8f8f'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(116, 116, 116, 0)'
          }
        }
      },
      
    ],
    series: [
      {
        type: 'radar',
        emphasis: {
          lineStyle: {
            width: 4
          }
        },
        data: [
          {
            value: [100, 8, 0.4, -80, 2000],
            name: 'Data A'
          },
          {
            value: [60, 5, 0.3, -100, 1500],
            name: 'Data B',
            areaStyle: {
              color: 'rgba(255, 228, 52, 0.6)'
            }
          }
        ]
      },
    
    ]
  };


  return (
    <div className={styles.main}>
      <header>
        <p>Gastos</p>
        <div className={styles.info}>
          <div className={styles.ball}></div>
          <p>Gastos</p>
        </div>
      </header>
      <div className={styles.chartContainer}>
        <ReactEcharts className={styles.chart} option={option} />
      </div>
    </div>
  )
}                                                                       
