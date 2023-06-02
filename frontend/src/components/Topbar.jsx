import React from 'react';
import logo from '../assets/novabit-black.png';

const Topbar = () => {
  return (
    <div style={{ backgroundColor: 'white', width: '100%', height: '9vh', zIndex: '10', position: 'fixed', top: '0', display: 'grid', gridTemplateColumns: '1fr auto' }}>
      <div style={{ marginLeft: '50px' }}>
        <h2>Adminkonsole</h2>
      </div>
      <div style={{ justifySelf: 'end', marginRight: '50px' }}>
        <img src={logo} alt="logo" width={'300px'} />
      </div>
    </div>
  );
};

export default Topbar;
