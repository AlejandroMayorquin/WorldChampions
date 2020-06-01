import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
                <Grid item xs={12}>
                    <React.Fragment>
                        <CssBaseline />
                        <Container spacing={1} align="center">
                            <img src={"https://a3.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F360.png"} />
                        </Container>
                    </React.Fragment>
                </Grid>
                <Grid item xs={6}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media} />
                            <img src="https://a3.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F360.png" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    MANCHESTER UNITED F.C.
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                El Manchester United Football Club es un club de fútbol de la ciudad 
                                de Mánchester que compite en la Premier League y disputa sus partidos 
                                como local en el estadio Old Trafford. Fue fundado el 5 de marzo de 
                                1878 bajo el nombre de Newton Heath LYR Football Club​ y se incorporó 
                                a la First Division en 1892.
          </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media} />
                            <img src="https://a1.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F23.png" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    PREMIER LEAGUE
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    El Manchester United es el maximo campeon de la Premier League con
                                    un total de 20 titulos, tambien es el unico equipo en ser
                                    pentacampeon en los años (1995-2000) tambien
                                    siendo tricampeon en los años (2002-2005) y varias veces
                                    Bicampeon de la competicion.----------------
                                    |DK|
          </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

        </div>
    );
}