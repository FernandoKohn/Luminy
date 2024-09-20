import { Height } from '@mui/icons-material';
import styles from './Budget.module.css'
import * as echarts from 'echarts';
import ReactEcharts from "echarts-for-react";

export const Budget = ({ userData, card }) => {

    var chartDataBisa: any = {}
    var chartDataFaster: any = {}

    for (let values of userData.bisa) {
        if (chartDataBisa[values.dia] == undefined) {
            chartDataBisa[values.dia] = 0
        }
        chartDataBisa[values.dia] += parseInt(values.valor)
    }

    for (let values of userData.fastercard) {
        if (chartDataFaster[values.dia] == undefined) {
            chartDataFaster[values.dia] = 0
        }
        chartDataFaster[values.dia] += parseInt(values.valor)
    }



    const optionsBisa = {
        width: 620,
        height: 200,
        xAxis: {
            type: 'category',
            data: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']
        },
        tooltip: {
            trigger: 'axis'
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Gastos',
                color: '#b5db42',
                data: [chartDataBisa.Segunda? chartDataBisa.Segunda : 0, chartDataBisa.Terça? chartDataBisa.Terça : 0, chartDataBisa.Quarta? chartDataBisa.Quarta : 0, chartDataBisa.Quinta? chartDataBisa.Quinta : 0, chartDataBisa.Sexta? chartDataBisa.Sexta : 0, chartDataBisa.Sabado? chartDataBisa.Sabado : 0, chartDataBisa.Domingo? chartDataBisa.Domingo : 0],
                type: 'line',
                smooth: true
            }
        ]
    };

    const optionsFaster = {
        width: 620,
        height: 200,
        xAxis: {
            type: 'category',
            data: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']
        },
        tooltip: {
            trigger: 'axis'
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Gastos',
                color: '#bdbdbb',
                data: [chartDataFaster.Segunda? chartDataFaster.Segunda : 0, chartDataFaster.Terça? chartDataFaster.Terça : 0, chartDataFaster.Quarta? chartDataFaster.Quarta : 0, chartDataFaster.Quinta? chartDataFaster.Quinta : 0, chartDataFaster.Sexta? chartDataFaster.Sexta : 0, chartDataFaster.Sabado? chartDataFaster.Sabado : 0, chartDataFaster.Domingo? chartDataFaster.Domingo : 0],
                type: 'line',
                smooth: true
            }
        ]
    };


    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.headerStart}>
                    <h1>Gastos por dia</h1>
                    <p>Cartão: {card}</p>
                </div>
                <div className={styles.headerButton}>
                    <p>Essa semana</p>
                </div>
            </div>
            {card == "bisa" ? (
                <ReactEcharts option={optionsBisa} />
            ) : (
                <ReactEcharts option={optionsFaster} />
            )}
        </div>
    )
}
