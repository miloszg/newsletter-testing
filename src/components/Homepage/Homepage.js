import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import MailOutlineOutlined from '@material-ui/icons/MailOutlineOutlined'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axiosEmail from '../../api/axios-email'


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Draggable from 'react-draggable';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        txt4seo.pl
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1462396240927-52058a6a84ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1932&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(20, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    display: 'flex',
    margin: theme.spacing(5,26),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [check, setCheck] = useState(true);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("Dziękujemy za zapisanie się na Newslettera!");
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const validateEmail = (email) => {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }
  return (
    <Grid container component="main" className={classes.root} data-test="mainGrid">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <MailOutlineOutlined/>
          </Avatar>
          <Typography component="h1" variant="h5" data-test="typography">
            Newsletter TXT4SEO
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              data-test="emailField"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adres Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox 
              value="remember" 
              checked={check} 
              onChange={()=>{
                setCheck(!check)
              }}
              color="primary" />}
              label="Zgadzam się na przyjmowanie Newslettera" 
            />
            <Button
              data-test="sumbitButton"
              // type="submit"
              disabled={!check}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=>{
                    if(validateEmail(email)){
                    handleClickOpen();
                    const data={
                        email: email,
                        date: new Date()
                    }
                    axiosEmail.post('/emails.json',data)
                        .then(response => console.log(response))
                        .catch(error => console.log(error));
                    
                    } else{
                      setMessage('Nieprawidłowy format maila!');
                      handleClickOpen();
                    }}
                    
            }
            >
              Zapisz mnie
            </Button>
            <Typography align="center">
              Nie martw się, wysyłamy najwyżej jeden mail na miesiąc. 
              <br/>
              Zawiera on informacje ciekawe i przydatne dla każdego specjalisty SEO.
            </Typography>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
            <Dialog

              titlestyle={{textAlign: "center"}}
              style={{display:'flex',alignItems:'center',justifyContent:'center'}}
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              PaperComponent={PaperComponent}
              aria-labelledby="draggable-dialog-title"
            >
              <Avatar className={classes.avatar}>
                 <MailOutlineOutlined/>
              </Avatar>
              <DialogTitle style={{ cursor: 'move',textAlign: "center" }} id="draggable-dialog-title">
                {message}
              </DialogTitle>
              <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                  OK
                </Button>
              </DialogActions>
            </Dialog>
        </div>
      </Grid>
    </Grid>
  );
}

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
    </Draggable>
  );
}

  


      




