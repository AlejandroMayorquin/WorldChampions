import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(params) {
  const [close, setClose] = React.useState(true);

  const handleClose = () => {
    setClose(false);
  };
  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={params.open && close}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          FC - BARCELONA
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            El Fútbol Club Barcelona, conocido popularmente como Barça, ​ es una entidad polideportiva de Barcelona, España.
            Fue fundado como club de fútbol el 29 de noviembre de 1899 y registrado oficialmente el 5 de enero de 1903.
          </Typography>
          <Typography gutterBottom>
            Entrenador: Quique Setién,
            Cancha/estadio: Camp Nou
          </Typography>
          <Typography gutterBottom>
            Presidente: Josep Maria Bartomeu,
            Director ejecutivo: Òscar Grau,
            Ligas: Liga de Campeones de la UEFA, LaLiga, Copa del Rey
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            SALIR
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
