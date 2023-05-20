import { Button } from '@mui/material';
import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import AddStellenanzeigeForm from './EditPages/Stellenanzeigen';
import { Link, Navigate } from 'react-router-dom';
const Home = () => {
  const [loggedOut, setLoggedOut] = useState(false);

    const buttonStyle = {
      backgroundColor: 'white',
      color: 'black',
      borderRadius: '10px',
      padding: '10px 20px',
      marginBottom:'5px'

    };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setLoggedOut(true);
    window.location.reload()
  };

  


  return (
    <div style={{marginLeft:'20px', marginTop:'10vh'}}>
      
      <div>
        <h3>Team bearbeiten</h3>
        <Button style={buttonStyle}  endIcon={<AddCircleIcon />}>Box hinzufügen</Button> <br />
        <Button style={buttonStyle} endIcon={<EditIcon />}>Box bearbeiten</Button>
      </div>

      <div>
        <h3>Stellenanzeigen bearbeiten</h3> 
        <Button  style={buttonStyle} endIcon={<AddCircleIcon />}> 
        <Link to="/stellenanzeigen" >
        Stellenanzeigen hinzufügen</Link></Button><br />
        <Button style={buttonStyle} endIcon={<EditIcon />}>Stellenanzeigen bearbeiten</Button>
      </div>

      <div>
        <h3>Rezensionen bearbeiten</h3>
        <Button style={buttonStyle} endIcon={<AddCircleIcon />}>Rezensionen hinzufügen</Button> <br />
        <Button style={buttonStyle} endIcon={<EditIcon />}>Rezensionen bearbeiten</Button>
      </div>
      <Button variant="outlined" color="error" onClick={handleLogout}>Ausloggen</Button>
    </div>
  );
};

export default Home;
