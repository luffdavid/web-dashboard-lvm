import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'ADMIN' && password === 'ADMIN') {
      localStorage.setItem('isLoggedIn', true);
      window.location.reload();
    } else {
      setError('Nutzername und / oder Passwort falsch');
    }
  };

  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
const contactSupport = () => {
  const email = "david.luff03@gmail.com";
  const subject = "Probleme Login LVM Admin Dashboard";
  const body = ``;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}
  return (
    <Box style={containerStyles}>
      <Box p={3} border="1px solid gray" borderRadius={4} bgcolor="white"  style={{opacity:'0.8'}}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form>
          <Box mb={2}>
            <TextField
              label="Nutzernamename"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Zugangsschlüssel"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          Probleme beim Anmelden? <br />
          Wende dich hierfür an den  <button onClick={contactSupport}>Support</button> <br /> <br />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
          
          {error && (
            <div
              style={{
                color: 'red',
                border: '1px solid red',
                padding: '3px',
                marginTop: '5px',
              }}
            >
              {error}
            </div>
          )}
        </form>
      </Box>
    </Box>
  );
};

export default Login;
