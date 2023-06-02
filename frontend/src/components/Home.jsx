import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Home = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '10px',
    padding: '10px 20px',
    marginBottom: '5px'
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setLoggedOut(true);
    window.location.reload();
  };

  return (
    <div style={{ marginLeft: '20px', marginTop: '10vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {/* LOGOUT */}
      <div style={{textAlign:'right', width:'90%', marginRight:'10%'}}>
      <Button variant="outlined" color="error" onClick={handleLogout} style={{ textAlign: 'right' }}>
        Ausloggen
      </Button>
      </div>

      <div>  
        <h3>Team bearbeiten</h3>
        <Link to="/team" style={{ color: 'black', textDecoration: 'none' }}>
          <Button style={buttonStyle} endIcon={<AddCircleIcon />}>
            Box hinzufügen
          </Button>
        </Link>
        <br />
        <Link to="/team" style={{ color: 'black', textDecoration: 'none' }}>
          <Button style={buttonStyle} endIcon={<EditIcon />}>
            Box bearbeiten
          </Button>
        </Link>
      </div>

      <div>
        <h3>Stellenanzeigen bearbeiten</h3>
        <Link to="/stellenanzeigen" style={{ color: 'black', textDecoration: 'none' }}>
          <Button style={buttonStyle} endIcon={<AddCircleIcon />}>
            Stellenanzeigen hinzufügen
          </Button>
        </Link>
        <br />
        <Link to="/stellenanzeigen" style={{ color: 'black', textDecoration: 'none' }}>
          <Button style={buttonStyle} endIcon={<EditIcon />}>
            Stellenanzeigen bearbeiten
          </Button>
        </Link>
      </div>

      <div>
        <h3>Rezensionen bearbeiten</h3>
        <Link to="/rezensionen" style={{ color: 'black', textDecoration: 'none' }}>
          <Button style={buttonStyle} endIcon={<AddCircleIcon />}>
            Rezensionen hinzufügen
          </Button>
        </Link>
        <br />
        <Link to="/rezensionen" style={{ color: 'black', textDecoration: 'none' }}>
          <Button style={buttonStyle} endIcon={<EditIcon />}>
            Rezensionen bearbeiten
          </Button>
        </Link>
        <br />
      </div>

      
    </div>
  );
};

export default Home;
