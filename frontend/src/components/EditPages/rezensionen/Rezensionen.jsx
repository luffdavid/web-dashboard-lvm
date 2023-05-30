import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Rezensionen = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [bewertung, setBewertung] = useState('');
  const [rezensionen, setRezensionen] = useState([]);


  useEffect(() => {
    fetchRezensionen();
  }, []);
 //GET Rezensionen
 const fetchRezensionen = async () => {
  try {
    const response = await fetch('http://localhost:5000/rezensionen');
    const data = await response.json();
setRezensionen(data);
console.log(data)
  } catch (error) {
    console.error('Fehler beim Abrufen der Rezensionen:', error);
  }
};
  // ADD Rezensionen (=> POST)
  const handleAddRezension = async (e) => {
    e.preventDefault();

    const rezensionData = {
      name: name,
      bewertung: bewertung,
      text: text,
    };
    try {
      const response = await fetch('http://localhost:5000/rezensionen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(rezensionData)
      });

      if (!response.ok) {
        throw new Error('Fehler beim Hinzufügen der Rezension');
      }
      if(response.ok) {
        alert('Neue Rezension hinzugefügt');
    setText('');
    setBewertung('');
    setName('');
     // Aktualisiere die Liste der Rezensionn
     fetchRezensionen();
      }
    } catch (error) {
      console.error('Fehler beim Hinzufügen der Rezension:', error);
      alert('Fehler beim Hinzufügen der Rezension');
    } 
  };

 
  
  //DELETE Rezension
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/rezensionen/${id}`, {
        method: 'DELETE'
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Die Rezension wurde erfolgreich gelöscht
        // Aktualisiere den State oder führe andere notwendige Aktionen durch
        alert('Rezension erfolgreich gelöscht:', data);
        fetchRezensionen();
      } else {
        // Fehler beim Löschen der Rezension
        alert('Fehler beim Löschen der Rezension', data.message);
      }
    } catch (error) {
      alert('Fehler beim Löschen der Rezension:', error);
    }
  };
  
  return (
    <div style={{marginTop:'10vh'}}>
    {/* ADD Rezension */}
  <h2>Rezension hinzufügen</h2>
  <form style={{width:'60%', marginLeft:'20%'}} onSubmit={handleAddRezension}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        /> <br /><br />
        <TextField
          label="Text der Bewertung"
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
        /><br /><br />
        <TextField
          label="Sterne / Bewertung"
          value={bewertung}
          onChange={(e) => setBewertung(e.target.value)}
          fullWidth

        /> <br />
        <Button type="submit" variant="contained" color="primary">
          Rezension hinzufügen
        </Button>
      </form>

  {/* GET Rezension */}
<div>
  <h3>Aktuell geschaltene Rezensionen:</h3> 
  {rezensionen && rezensionen.map(rezension => (
    <Card key={rezension._id} sx={{ backgroundColor: 'white',  padding: 2, marginBottom: '10px', width:'70%', marginLeft:'15%' }}>
      {/* DELETE Rezension */}
     

      <Typography variant="h6">{rezension.name}</Typography>
      <Typography variant="h6"> <AccessTimeIcon /> {rezension.text}</Typography>
      <Typography variant="h6">{rezension.bewertung}</Typography>
    
      <Button onClick={() => handleDelete(rezension._id)}>Löschen</Button>
    </Card>

  ))}
</div>


</div>
  );
  }
export default Rezensionen;