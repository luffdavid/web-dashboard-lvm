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
  
  return (
  <div>
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
{stellenanzeigen && stellenanzeigen.map(stellenanzeige => (
  <div key={stellenanzeige._id}>
    <h2>{stellenanzeige.title}</h2>
  </div>
))}

</div>
  );
  }
export default Stellenanzeigen;