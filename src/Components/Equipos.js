import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ReactPlayer from 'react-player'

import EquiposE from './EquiposE'

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

export default function ButtonAppBar() {

    
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="100" style={{ backgroundColor: 'black' }}>
                    <div align="center">
                        <ReactPlayer url='https://www.youtube.com/watch?v=JZQFcf4ssw4' playing />
                    </div>
                </Container>
            </React.Fragment>
            <EquiposE/>
        </div>
    );
}
