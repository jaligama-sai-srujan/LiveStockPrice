import React,{useState,useEffect} from "react";
import {Line,Bar} from 'react-chartjs-2'; 

import styles from './Chart.module.css'
import rc from'randomcolor'
import 'chartjs-plugin-datalabels';

const Chart = ({data,company,bgc }) =>{
    const latestPrice = data.map(index=>index.latestPrice)
    const companyNames = data.map(index=>index.symbol)
    console.log(companyNames)
    // var i;
    // const bgc = []
    // for (i = 0; i < latestPrice.length; i++) {
    // bgc.push(rc({
    //     hue: 'random',
    //     luminosity: 'bright'
    //  }))
    // }
        const barChart = (
        latestPrice.length ? (
            <Bar
                data={{
                    labels: companyNames,
                    datasets: [{
                        label: 'price',
                        backgroundColor: bgc,
                        data: latestPrice,
                    }]
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: `Live Stock Price`},
                    plugins: {
                        datalabels: {
                           display: true,
                           color: 'white'
                        }
                     }
                }}
                
            />
        ) : null
    );
    return (
        <div className={styles.container}>
            {barChart}
        </div>
    )
}
export default Chart;