import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SvgIcon from '@material-ui/core/SvgIcon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LanguageIcon from '@material-ui/icons/Language';
import * as firebase from "firebase";
import { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from './Inicio';
import Equipos from './Equipos';
import Registro from './Registro';
import Clasificacion from './Clasificacion';
import Cristiano from './Cristiano'
import Mbappe from './Mbappe'
import Messi from './Messi'
import Realmadrid from './Realmadrid'


var firebaseConfig = {
    apiKey: "AIzaSyC3djTLlmmwgbt8nsgWgfwXcmHICFrAMXE",
    authDomain: "final2-8e6cf.firebaseapp.com",
    databaseURL: "https://final2-8e6cf.firebaseio.com",
    projectId: "final2-8e6cf",
    storageBucket: "final2-8e6cf.appspot.com",
    messagingSenderId: "77664014616",
    appId: "1:77664014616:web:ccbac41b25d8c257560e6d",
    measurementId: "G-0P3TKWRBG2"
};
firebase.initializeApp(firebaseConfig);


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

}));
function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);
export default function ButtonAppBar() {

    const [usuario, setUsuario] = useState({})

    const loginWithGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            setUsuario(user)
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (

        <div>
            <Router>
                <div className={classes.root}>
                    <AppBar position="static" color="transparent">

                        <Toolbar>
                            <Button aria-controls="customized-menu" aria-haspopup="true"
                                variant="contained" color="transparent" onClick={handleClick}>
                                Menu
                        </Button>

                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <Link to='/'>
                                    <StyledMenuItem>
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Inicio" />
                                    </StyledMenuItem>
                                </Link>
                                <Link to="/Equipos">
                                    <StyledMenuItem>
                                        <ListItemIcon>
                                            <SportsSoccerIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Equipos" />
                                    </StyledMenuItem>
                                </Link>
                                <Link to="/Clasificacion">
                                    <StyledMenuItem>
                                        <ListItemIcon>

                                            <LanguageIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Clasificacion" />
                                    </StyledMenuItem>

                                </Link>

                                <Link to="/Registro">
                                    <StyledMenuItem>
                                        <ListItemIcon>
                                            <ListAltIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Registro" />
                                    </StyledMenuItem>
                                </Link>
                            </StyledMenu>


                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

                            </IconButton>
                            <Typography variant="h6" className={classes.title} >
                                WORLD CHAMPIONS
                        </Typography>
                            <StyledMenuItem>
                                <ListItemIcon>
                                    <Typography >{usuario.displayName}</Typography>
                                    <Avatar src={usuario.photoURL} onClick={loginWithGoogle} />
                                </ListItemIcon>
                            </StyledMenuItem>
                        </Toolbar>
                    </AppBar>

                    <Switch>

                        <Route exact path="/">
                            <Inicio />
                        </Route>
                        <Route path="/Equipos">
                            <Equipos />
                        </Route>
                        <Route path="/Clasificacion">
                            <Clasificacion />
                        </Route>
                        <Route path="/Registro">
                            <Registro />
                        </Route>
                        <Route path="/CRISTIANO">
                            <Cristiano />
                        </Route>
                        <Route path="/MBAPPE">
                            <Mbappe />
                        </Route>
                        <Route path="/MESSI">
                            <Messi />
                        </Route>
                        <Route path="/Realmadrid">
                            <Realmadrid />
                        </Route>
                    </Switch>


                </div>
            </Router>
        </div>
    );
}
