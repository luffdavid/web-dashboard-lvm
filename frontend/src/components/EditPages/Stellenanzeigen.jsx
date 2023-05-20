import React, { useEffect, useState } from 'react';

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

      alert('Neue Stellenanzeige hinzugefügt');

      // Aktualisiere die Liste der Stellenanzeigen
      fetchStellenanzeigen();
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
  <div>
    {/* ADD Stellenanzeige */}
  <h2>Stellenanzeige hinzufügen</h2>
  <form onSubmit={handleAddStellenanzeige}>
  <label>
  Titel:
<input type="text" value={title} onChange={e => setTitle(e.target.value)} />
</label>
<label>
Arbeitszeit:
<input type="text" value={arbeitszeit} onChange={e => setArbeitszeit(e.target.value)} />
</label>
<label>
Arbeitsart:
<input type="text" value={arbeitsart} onChange={e => setArbeitsart(e.target.value)} />
</label>
<label>
Aufgaben:
<input type="text" value={aufgaben} onChange={e => setAufgaben(e.target.value)} />
</label>
<label>
Berufsbezeichnung:
<input type="text" value={berufsbezeichnung} onChange={e => setBerufsbezeichnung(e.target.value)} />
</label>
<button type="submit">Stellenanzeige hinzufügen</button>
</form>

   {/* GET Stellenanzeige */}
Aktuell geschaltene Stellenanzeigen: <br />
{stellenanzeigen && stellenanzeigen.map(stellenanzeige => (  <div key={stellenanzeige._id}>
    <div style={{backgroundColor:'white', borderRadius:'10px', padding:5, marginBottom:'10px'}}>
     {/* DELETE Stellenanzeige */}
     <button onClick={() => handleDelete(stellenanzeige._id)}>Löschen</button>
    
    <h5>JobTitel:{stellenanzeige.title}</h5>
    <h5>Berufsbezeichnung:{stellenanzeige.berufsbezeichnung}</h5>
    <h5>Aufgaben:{stellenanzeige.aufgaben}</h5>
    <h5>Zeit:{stellenanzeige.arbeitszeit}</h5>
    <h5>Art:{stellenanzeige.arbeitsart}</h5>
    </div> 
  </div>
))}

</div>
  );
  }
export default Stellenanzeigen;