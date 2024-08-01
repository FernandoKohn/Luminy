import styles from './Graph.module.css'
import ReactEcharts from "echarts-for-react";
import axios from "axios";

export const Graph = ({ Budget, userData }) => {

  let values: any = {}
  let valuesSum: any = 0
 

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

  for (const [key, value] of Object.entries(values)) {
    valuesSum += value
  }


  const option = {

    radar: {
      indicator: [
        { name: 'Comida'},
        { name: 'Compra'},
        { name: 'Finanças'},
        { name: 'Lazer'},
        { name: 'Viagens'},
        { name: 'Etc',}
      ],
      center: ['50%', '50%'],
      radius: 140,
      startAngle: 90,
      splitNumber: 5,
      shape: 'circle',
      axisName: {
        formatter: '{value}',
        color: 'black'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(0, 0, 0, 0)'
        }
      },
      splitArea: {
        areaStyle: {
          color: "rgba(0, 0, 0, 0)"
        }
      },
      axisLine: {
        lineStyle: {
          color: 'black'
        }
      },
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value:[values.Comida / 1.8 , values.Compras / 1.8, values.Finanças/ 1.8, values.Lazer / 1.8, values.Viagem / 1.8, values.Etc / 1.8],
            name: 'Allocated Budget',
            symbolSize: 1,
            lineStyle: {
              color:"black",
              width: 1,
            },
          },
          {
            value: [values.Comida, values.Compras, values.Finanças, values.Lazer, values.Viagem, values.Etc],
            name: 'Actual Spending',
            symbolSize: 1,
            areaStyle: {
              color: "#bfff00"
            },
            lineStyle: {
              color:"rgba(0, 0, 0, 0)"
            }
            
          }
        ]
      }
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
      <div>
        <ReactEcharts className={styles.teste} option={option} />
      </div>
    </div>
  )
}                                                                       
