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
                        <Container spacing={1} align="left">
                            <img src={"https://i.pinimg.com/originals/5f/a9/40/5fa9407fcf5deb4e626f6e570d035a9d.jpg"} />
                        </Container>
                    </React.Fragment>
                </Grid>
                <Grid item xs={6}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media} />
                            <img src="https://a.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F86.png" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    REAL MADRID F.C.
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    El Real Madrid Futbol Club es uno de los mayores y mas grandes equipo de europa
                                    mundialmente conocidos, es uno de los mejores clubes de europa considerado en
                                    el año 2000 el mejor equipo del siglo.
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
                            <img src="https://cdn11.bigcommerce.com/s-mf8nk5mp4s/products/4292/images/4843/uclhonour13_zoom1__91543.1536784865.500.750.jpg?c=2" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    CHAMPIONS LEAGUE
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    El Real Madrid es el maximo campeon de la Champions League con
                                    un total de 13 titulos, tambien es el unico pentacampeon de la
                                    competicion en los años (1956-1960) siendo en los primeros 5
                                    años desde que se creo la competicion.
          </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

        </div>
    );
}