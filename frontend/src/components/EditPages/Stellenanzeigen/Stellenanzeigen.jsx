import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';
import DoneIcon from '@mui/icons-material/Done';

const Stellenanzeigen = () => {
  const [title, setTitle] = useState('');
  const [arbeitszeit, setArbeitszeit] = useState('');
  const [arbeitsart, setArbeitsart] = useState('');
  const [aufgaben, setAufgaben] = useState('');
  const [berufsbezeichnung, setBerufsbezeichnung] = useState('');
  const [stellenanzeigen, setStellenanzeigen] = useState([]);

  useEffect(() => {
    fetchStellenanzeigen();
  }, []);
 //GET Stellenanzeigen
 const fetchStellenanzeigen = async () => {
  try {
    const response = await fetch('http://localhost:5000/stellenanzeigen');
    const data = await response.json();
setStellenanzeigen(data);
console.log(data)
  } catch (error) {
    console.error('Fehler beim Abrufen der Stellenanzeigen:', error);
  }
};


const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'auto',
  width: '70%',
  marginLeft:'8%',
  marginRight:'20%',
  marginBottom:'5%',
  backgroundColor: 'green',
};

const leftDivStyles = {
  paddingLeft:'30px',
  width: '70%',
  height: '100%',
  backgroundColor: 'white',
};

const rightDivStyles = {
  width: '30%',
  height: '100%',
  backgroundColor: 'green',
  color:'white'
};

  // ADD Stellenantzeige (=> POST)
  const handleAddStellenanzeige = async (e) => {
    e.preventDefault();

    const stellenanzeigeData = {
      title: title,
      arbeitszeit: arbeitszeit,
      arbeitsart: arbeitsart,
      aufgaben: aufgaben,
      berufsbezeichnung: berufsbezeichnung
    };
    try {
      const response = await fetch('http://localhost:5000/stellenanzeigen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(stellenanzeigeData)
      });

      if (!response.ok) {
        throw new Error('Fehler beim Hinzufügen der Stellenanzeige');
      }
      if(response.ok) {
        alert('Neue Stellenanzeige hinzugefügt');
        setTitle('');
    setArbeitszeit('');
    setArbeitsart('');
    setAufgaben('');
    setBerufsbezeichnung('');
     // Aktualisiere die Liste der Stellenanzeigen
     fetchStellenanzeigen();
      }
    } catch (error) {
      console.error('Fehler beim Hinzufügen der Stellenanzeige:', error);
      alert('Fehler beim Hinzufügen der Stellenanzeige');
    } 
  };

 
  
  //DELETE Stellenanzeige
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/stellenanzeigen/${id}`, {
        method: 'DELETE'
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Die Stellenanzeige wurde erfolgreich gelöscht
        // Aktualisiere den State oder führe andere notwendige Aktionen durch
        console.log('Stellenanzeige erfolgreich gelöscht:', data);
        fetchStellenanzeigen();
      } else {
        // Fehler beim Löschen der Stellenanzeige
        console.error('Fehler beim Löschen der Stellenanzeige:', data.message);
      }
    } catch (error) {
      console.error('Fehler beim Löschen der Stellenanzeige:', error);
    }
  };
  
  return (
  <div style={{marginTop:'10vh'}}>
    {/* ADD Stellenanzeige */}
  <h2>Stellenanzeige hinzufügen</h2>
  <form style={{width:'60%', marginLeft:'20%'}} onSubmit={handleAddStellenanzeige}>
        <TextField
          label="Titel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        /> <br /><br />
        <TextField
          label="Arbeitszeit"
          value={arbeitszeit}
          onChange={(e) => setArbeitszeit(e.target.value)}
          fullWidth
        /><br /><br />
        <TextField
          label="Arbeitsart"
          value={arbeitsart}
          onChange={(e) => setArbeitsart(e.target.value)}
          fullWidth
        /><br /><br />
        <TextField
          label="Aufgaben"
          value={aufgaben}
          onChange={(e) => setAufgaben(e.target.value)}
          multiline
          maxRows={15}
          fullWidth
        /><br /><br />
        <TextField
          label="Berufsbezeichnung"
          value={berufsbezeichnung}
          onChange={(e) => setBerufsbezeichnung(e.target.value)}
          multiline
          maxRows={15}
          fullWidth
        /> <br />
        <Button type="submit" variant="contained" color="primary">
          Stellenanzeige hinzufügen
        </Button>
      </form>

  {/* GET Stellenanzeige */}
  <div>
  <h3>Aktuell geschaltene Stellenanzeigen:</h3> 
  {stellenanzeigen && stellenanzeigen.map(stellenanzeige => (
  <div className="container" style={containerStyles}>
      <div className="left-div" style={leftDivStyles}>
      <Button color='error' style={{border:'1px solid red'}} onClick={() => handleDelete(stellenanzeige._id)}>Löschen</Button>
        <span style={{paddingLeft:'10px',paddingTop:'10px'}}><h3>{stellenanzeige.title}</h3></span>
        <span><AccessTimeIcon /> {stellenanzeige.arbeitszeit}</span><span style={{paddingLeft:'20px'}}> <SchoolIcon /> {stellenanzeige.arbeitsart}</span> <br />
        <span><h4>Ihre Aufgaben:</h4></span> 
        <span><p>{stellenanzeige.aufgaben}</p></span>
        <span><h4>Berufsbezeichnung:</h4></span> 
        <span><p>{stellenanzeige.berufsbezeichnung}</p></span>
      </div>
      <div className="right-div" style={rightDivStyles}>
        <span>Ihre Vorteile: </span> <br />
        <span><p><DoneIcon />lorem ipsum</p></span>
        <span><p><DoneIcon />lorem ipsum</p></span>
        <span><p><DoneIcon />lorem ipsum</p></span>
        <span><p><DoneIcon />lorem ipsum</p></span>
      </div>
     
    </div>
))}
</div>
</div>
  );
  }
export default Stellenanzeigen;