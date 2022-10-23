import React from 'react';
import '../styles/css/about.css';
import welcome from '../assets/images/welcome.png';

const DashBoard = () => (
  <header>
    <center>
      <div className="dashboard">
        <h1>Welcom To My Todo App</h1>
        <h1>This App make with Reactjs</h1>
        <img
          className="welcome"
          src={welcome}
          alt="welcome to my app"
          title="Ehehe ~ Welcome"
        />
      </div>
    </center>
  </header>
);

export default DashBoard;
