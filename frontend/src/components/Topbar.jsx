import React from 'react';

const Topbar = () => {
  return (
    <div style={{ backgroundColor: 'white', width: '100%', height: '9vh', zIndex: '10', position: 'fixed', top: '0' }}>
      <div style={{ marginLeft: '50px' }}>
        <h2>Adminkonsole</h2>
      </div>
    </div>
  );
};

export default Topbar;
