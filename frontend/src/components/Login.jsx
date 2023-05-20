import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'abcde' && password === 'abcde') {
      localStorage.setItem('isLoggedIn', true);
      window.location.reload();
    } else {
        setError("Nutzername und / oder Passwort falsch")
    }
};

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box p={3} border="1px solid gray" borderRadius={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form>
          <Box mb={2}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
          {error && (
           <div style={{color:'red',border: '1px solid red', padding:'3px', marginTop:'5px'}}>{error}</div>
          )}
        </form>
      </Box>
    </Box>
  );
};

export default Login;
