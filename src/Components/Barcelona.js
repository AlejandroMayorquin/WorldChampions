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
                            <img src={"https://i.pinimg.com/originals/4e/87/0c/4e870c6d61be9306bd9681554b0df83d.png"} />
                        </Container>
                    </React.Fragment>
                </Grid>
                <Grid item xs={6}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media} />
                            <img src="https://i.pinimg.com/originals/4e/87/0c/4e870c6d61be9306bd9681554b0df83d.png" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    BARCELONA F.C.
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    El Barcelona Futbol Club es uno de los clubes más grandes y famosos de europa
                                    mundialmente conocidos, es uno de los mejores clubes de europa destacando su 
                                    grandiosa actuacion en 2015 donde consiguieron conquistar todas las
                                    competiciones en las que participaron.
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
                            <img src="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F80.png" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    COPA DEL REY
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    El Barcelona es el maximo campeon de la Copa del Rey con
                                    un total de 33 titulos, tambien es el unico equipo en ser
                                    campeon 4 años consecutivos en los años (2014-2018) tambien
                                    siendo tricampeon en los años (1951-1953) y varias veces
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