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
                        <img src={"https://cdn.foxsportsla.com/sites/foxsports-la/files/img/notes/news/Mbappe-PSG-1280x720-200519.jpg"} />
                    </Container>
                </React.Fragment>
                </Grid>
                <Grid item xs={6}>
                <ReactPlayer url='https://www.youtube.com/watch?v=QORAifg9Sxc' playing />
                </Grid>
                <Grid item xs={6}>
                <ReactPlayer url='https://www.youtube.com/watch?v=EsLFEmlJnAk' playing />
                </Grid>
            </Grid>

        </div>
    );
}