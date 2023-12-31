import React from 'react';
import socketClient from "socket.io-client";
import logo from './logo.svg';
import './App.css';

const SERVER = "http://localhost:8080";

function App() {
  const socket = socketClient (SERVER);
  socket.on('connection', () => {
    console.log(`I'm connected with the back-end`);
});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
