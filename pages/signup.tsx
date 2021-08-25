import Layout from '@components/Layout';
import { createStyles, makeStyles, Theme, TextField, Button, Typography } from '@material-ui/core';
import React, { SyntheticEvent, useState } from 'react';

const useStyles = makeStyles((theme: Theme) => createStyles({
  signup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50%',
    flex: '1',
    borderRadius: '10px',
    padding: '50px',
    margin: '20vh 0',
    borderLeft: `3px solid rgba(0,0,0,0.2)`,
    borderRight: `3px solid rgba(0,0,0  ,0.2)`,
  },
}))

const Signup = () => {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(confirm);
  }

  return (
    <Layout title="Signup Brain Train">
      <div className="container">
        <Typography variant='h1'>Signup</Typography>
        <form className={classes.signup} onSubmit={handleSubmit}>
          <TextField fullWidth label="Username" margin="normal" variant="outlined" aria-describedby="Enter Username" type='text' onChange={(e: SyntheticEvent) => setUsername((e.target as HTMLInputElement).value)} />
          <TextField fullWidth label="Password" margin="normal" variant="outlined" aria-describedby="Enter Password" type='password' onChange={(e: SyntheticEvent) => setPassword((e.target as HTMLInputElement).value)} />
          <TextField fullWidth label="Confirm" margin="normal" variant="outlined" aria-describedby="Confirm Password" type='confirm' onChange={(e: SyntheticEvent) => setConfirm((e.target as HTMLInputElement).value)} />
          <Button type="submit" size="large" color='primary' variant="contained">Signup</Button>
        </form>
      </div>
    </Layout>
  )
}

export default Signup;