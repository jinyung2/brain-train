import Layout from '@components/Layout';
import { Typography, TextField, createStyles, Theme, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SyntheticEvent, useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    login: {
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

const Login = () => {
  const classes = useStyles();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(username);
    console.log(password);

  }

  return (
    <Layout title="Login Brain Train">
      <div className='container'>
      <Typography variant="h1">Login</Typography>
        <form className={classes.login} onSubmit={handleSubmit}>
          <TextField fullWidth label="Username" margin="normal" variant="outlined" aria-describedby="Enter Username" type='text' onChange={(e: SyntheticEvent) => setUsername((e.target as HTMLInputElement).value)} />
          <TextField fullWidth label="Password" margin="normal" variant="outlined" aria-describedby="Enter Password" type='password' onChange={(e: SyntheticEvent) => setPassword((e.target as HTMLInputElement).value)} />
          <Button type="submit" size="large" color='primary' variant="contained">Login</Button>
        </form>
      </div>
    </Layout>
  )
}

export default Login;