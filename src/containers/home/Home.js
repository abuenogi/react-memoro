import React from 'react';
import logo from './../../img/logo1.png';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidas a Memoro: Tamara y Ana.
        </p>
      </header>
    </div>
  );
}

export default App;
