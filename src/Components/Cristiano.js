import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    return (
        <div className={classes.root} align="center">
            <Grid container spacing={3}>
                <Grid item xs = {12}>
                <React.Fragment>
                    <CssBaseline />
                    <Container spacing={1} align="left">
                        <img src={"https://uhdwallpapers.org/uploads/converted/18/11/14/cristiano-ronaldo-wallpaper-4k-for-juventus-1280x720_86475-mm-90.jpg"} />
                    </Container>
                </React.Fragment>
                </Grid>
                <Grid item xs={6}>
                <ReactPlayer url='https://www.youtube.com/watch?v=E-328b6K2sk' playing />
                </Grid>
                <Grid item xs={6}>
                <ReactPlayer url='https://www.youtube.com/watch?v=rVhDs2pmj-Y' playing />
                </Grid>
            </Grid>

        </div>
    );
}