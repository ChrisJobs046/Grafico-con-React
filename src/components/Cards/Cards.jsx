import React from 'react'
import { Card, CardContend, Typography, Grid } from'@material-ui/core';
import styles from './Cards.module.css;'

const Cards = ({ confirmed, recovered, deaths, lastUpdate }) => {

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item Component={Card}>
                    <CardContend>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">Real Data</Typography>
                        <Typography color="textSecondary"> Real Data</Typography>
                        <Typography variant="body2">Number of active cases of Covid-19</Typography>
                    </CardContend>
                </Grid>
                <Grid item Component={Card}>
                    <CardContend>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">Real Data</Typography>
                        <Typography color="textSecondary"> Real Data</Typography>
                        <Typography variant="body2">Number of recoveries from Covid-19</Typography>
                    </CardContend>
                </Grid>
                <Grid item Component={Card}>
                    <CardContend>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">Real Data</Typography>
                        <Typography color="textSecondary"> Real Data</Typography>
                        <Typography variant="body2">Number of deaths caused by Covid-19</Typography>
                    </CardContend>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;