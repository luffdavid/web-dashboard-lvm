import { Button } from '@mui/material'
import React from 'react'

const Team = () => {

    const sendMail = () => {
        window.open('mailto:david.luff03@gmail.com');
    }
  return (
    <div style={{marginTop:'10vh'}}>

  <h2>Teammitglied hinzufügen</h2>

  <div style={{width:'50%', marginLeft:'5%'}}> Um ein Teammitglied hinzuzufügen oder das Team und den dazugehörigen Text zu bearbeiten / löschen, muss eine Anfrage an den Support gestellt
    werden. Folgende Angaben werden benötigt. <br />
    Bild im .jpg oder .png Format, dazugehöriger Text (Kontaktdaten) und Stelle, an dem das Bild zu sehen ist. <br /><br /><br />
    <Button variant='contained' onClick={sendMail}>Hier klicken um Support zu kontaktieren</Button>
     </div>
  </div>
  )
}

export default Team