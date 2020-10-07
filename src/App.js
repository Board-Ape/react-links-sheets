import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import sheets from './sheets.png';
import './App.css';

import Tabletop from 'tabletop';

function App() {
  const [googleSheets, setGoogleSheets] = useState([]);

  useEffect(() => {
    updateApplication();
  }, [])

  function updateApplication() {
    Tabletop.init({
      key: '1fMfvMM05bkMHVTrf9_vCRCD_vNXjLcom7fDeaREgIjY',
      callback: googleData => {
        setGoogleSheets(googleData);
      },
      simpleSheet: true
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="react logo" />
        <img src={sheets} className="App-logo" alt="sheets logo" />
        <h1 className="App-title">React Links Google Sheets</h1>
      </header>
      <button onClick={updateApplication} type="submit" className="update-button">Update Application</button>
      <main style={{width: 800 + 'px', display: 'inline-flex', justifyContent: 'space-between'}}>
        {googleSheets.map((item, idx) => (
          <div key={item.idx + item.name}>
            <h3>{item.name} <span> = {item.price} ac-miles</span></h3>
            <img src={item.img} alt={item.name} className={'product-image'}/>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
