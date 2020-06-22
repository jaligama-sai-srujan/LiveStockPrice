import React from "react";
import {Card, CardContent, Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './cards.module.css'
const Cards = ({data:{latestPrice,latestTime,symbol},bgc}) =>{
    console.log(latestPrice);
    if(!latestPrice){
        return 'Loading';
    }
    return (
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
            {/* <Grid item component ={Card}> */}
                <Grid item component={Card} className={cx(styles.card,styles.latestPrice)} >
                    <CardContent>
                        <Typography color="textSecondary gutterBottom">Price of {symbol}</Typography>
                        <Typography variant="h5">
                            
                            <CountUp start={0.0} end={latestPrice} duration={2.0} decimals={2}/>
                        </Typography>
                        {/* <Typography variant="body2">{new Date(latestTime).toDateString()}</Typography> */}
                    </CardContent>
                </Grid>
        </Grid>    
        </div>
    )
}

export default Cards;