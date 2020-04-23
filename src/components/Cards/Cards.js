import React from 'react';
import { Card, Grid, Typography, CardContent } from "@material-ui/core";
import CountUp from "react-countup";
import styles from './Cards.module.css'
import cx from "classnames";

const Cards = ({ data }) => {
    if (!data) return "Loading..."
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify={"center"}>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {"Infected"}
                        </Typography>
                        <Typography variant="h5">
                           <CountUp 
                           duration={2.5}
                           separator={","}
                           start={0}
                           end={data.confirmed.value}
                           />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                        {new Date(data.lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            {"Number of active cases of COVID-19"}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {"Recovered"}
                        </Typography>
                        <Typography variant="h5">
                        <CountUp 
                           duration={2.5}
                           separator={","}
                           start={0}
                           end={data.recovered.value}
                           />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                        {new Date(data.lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            {"Number of recovered cases of COVID-19"}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {"Deaths"}
                        </Typography>
                        <Typography variant="h5">
                        <CountUp 
                           duration={2.5}
                           separator={","}
                           start={0}
                           end={data.deaths.value}
                           />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                        {new Date(data.lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            {"Number of death cases of COVID-19"}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;