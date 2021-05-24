import React from 'react'
import { Card, CardContend, Typography, Grid } from'@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ( { data: { confirmed, recovered, deaths, lastUpdate } } ) => {

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item Component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContend>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of Covid-19</Typography>
                    </CardContend>
                </Grid>
                <Grid item Component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContend>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from Covid-19</Typography>
                    </CardContend>
                </Grid>
                <Grid item Component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContend>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by Covid-19</Typography>
                    </CardContend>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;