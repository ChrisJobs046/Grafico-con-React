import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

    const [ dailyData, setDailyData ] = useState({});

    useEffect(() => {

        const fetchApi = async () => {

            setDailyData(await fetchDailyData());
        }

        fetchApi();
    });

    const lineChart = (
        dailyData.length
        ?(
        <Line
        data={{
            labels: dailyData(({ date}) => date),
            datasets: [{
                data: dailyData(({ confirmed }) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,

            }, {
                data: dailyData(({ deaths }) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
            }],
        }}
        />) : null
    );

    const barChart = (

        confirmed
        ? (
            <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{

                    label: 'People',
                    backgroundColor: [

                        'rgb(0, 0, 255, 0.5)',
                        'rgba(7, 204, 0, 0.5',
                        'rgba(139, 7, 2, 0.5)'
                    ],
                    data: [ confirmed, recovered, deaths]
                }]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${ country }`}
            }}
            />
        ): null
    )

    return(
        <div className={styles.container}>
            { country? barChart: lineChart}
        </div>
        
    )
}

export default Chart;