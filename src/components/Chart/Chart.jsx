import React,{useState,useEffect} from "react";
import {fetchDailyData} from '../../api'
import {Line,Bar} from 'react-chartjs-2'; 

import styles from './Chart.module.css'

// const [dailyData, setDailyData] = useState([]);
    


//         const fetchAPI = async() =>{
//             setDailyData(await fetchDailyData());
//         }

//         console.log(dailyData);
//         fetchAPI();
   


const Chart = ({data,company }) =>{
    // useEffect(()=>{ },[]);
    console.log(data.latestPrice)
    const barChart = (
        data.latestPrice ? (
            <Bar
                data={{
                    labels: ['latestPrice'],
                    datasets: [{
                        label: 'price',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.7)',
                        ],
                        data: [data.latestPrice],
                    }]
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: `CurrentState in ${company}`},
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