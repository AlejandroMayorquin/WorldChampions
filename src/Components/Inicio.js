import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Cristiano from './Cristiano'
import Mbappe from './Mbappe'
import Messi from './Messi'

const images = [
  {
    url: 'https://besthqwallpapers.com/Uploads/9-10-2019/108332/thumb2-4k-cristiano-ronaldo-juventus-fc-cr7-blue-uniform.jpg',
    title: 'CRISTIANO',
    width: '35%',
    link: "/CRISTIANO"
    
  },
  {
    url: 'https://images2.alphacoders.com/966/966858.jpg',
    title: 'MBAPPE',
    width: '35%',
    link: "/MBAPPE"
  },
  {
    url: 'https://images5.alphacoders.com/976/976420.jpg',
    title: 'MESSI',
    width: '30%',
    link: "/MESSI"
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 600,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const classes = useStyles();

  return (
    <Router>
    <div className={classes.root}>
      {images.map((image) => (
        <Link
        onClick={handleClickOpen}
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          
          to={image.link}>
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </Link>
      ))}
    </div>
    <switch>
        <Route path="/CRISTIANO">
          <Cristiano open={open} />
        </Route>
        <Route path="/MBAPPE">
          <Mbappe open={open} />
        </Route>
        <Route path="/MESSI">
          <Messi open={open} />
        </Route>
      </switch>
    </Router>
  );
}
