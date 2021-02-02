import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

function Copyright() {
   return (
      <Typography variant="body2" color="textSecondary" align="center">
         {'Copyright © '}
         <Link color="inherit" href="https://material-ui.com/">
            Your Website
      </Link>{' '}
         {new Date().getFullYear()}
         {'.'}
      </Typography>
   );
}

const useStyles = makeStyles((theme) => ({
   paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
   },
   form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
}));

export default function Register() {
   const classes = useStyles();

   const [firstname, setFirstName] = useState("");
   const [lastname, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");


   const handleFirstName = (event) => {
      setFirstName(event.target.value)
   };

   const handleLastName = (event) => {
      setLastName(event.target.value)
   };

   const handleEmail = (event) => {
      setEmail(event.target.value)
   };

   const handlePassword = (event) => {
      setPassword(event.target.value)
   };

   const onFinish = async (event) => {
      event.preventDefault();

      const data = { firstname, lastname, email, password }
      await axios
      .post("http://localhost:8000/users/register", data)
      .then(res => {
         console.log(res);
         alert("Register success")
      })
      .catch(err => {
         alert(err)
      });
   };


   return (
      <Container component="main" maxWidth="xs">
         <CssBaseline />
         <div className={classes.paper}>
            <Avatar className={classes.avatar}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Register
        </Typography>
            <form className={classes.form} noValidate onSubmit={onFinish}>
               <Grid container spacing={2}>
                  <Grid item xs={12} >
                     <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        onChange={handleFirstName}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        onChange={handleLastName}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={handleEmail}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handlePassword}
                     />
                  </Grid>
                  
               </Grid>
               <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
               >
                  Register
               </Button>
               <Grid container justify="flex-end">
                  <Grid item>
                     <Link href="#" variant="body2">
                        Already have an account? Register
                     </Link>
                  </Grid>
               </Grid>
            </form>
         </div>
         <Box mt={5}>
            <Copyright />
         </Box>
      </Container>
   );
}