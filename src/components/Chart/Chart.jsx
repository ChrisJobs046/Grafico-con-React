import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

    const [ dailyData, setDailyData ] = useState({});

    useEffect(() => {

        const fetchApi = async () => {

            const InitialDailyData = await fetchDailyData();

            setDailyData(InitialDailyData);
        }

        fetchApi();
    }, []);

    const lineChart = (
        dailyData.length
        ?(
        <Line
        data={{
            labels: dailyData.map(({ date}) => date),
            datasets: [{
                data: dailyData.map(({ confirmed }) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,

            }, {
                data: dailyData.map(({ deaths }) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgb(209, 15, 8)',
                fill: true,
            },{
                data: dailyData.map(({ recovered }) => recovered),
                label: 'Recovered',
                borderColor: 'green',
                backgroundColor: 'rgba(5, 117, 1, 0.781)',
                fill: true,
                },
        ],
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
                    data: [ confirmed.value, recovered.value, deaths.value]
                },
            ],
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
        
    );
};

export default Chart;