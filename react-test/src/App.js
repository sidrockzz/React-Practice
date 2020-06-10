import React from 'react';
import logo from './logo.svg';
import { Navbar } from '../node_modules/reactstrap';
import './App.css';
import NavbarBrand from "reactstrap/es/NavbarBrand";
// Bootsrap component added into the code using reatstrap

function App() {
  return (
    <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              Siddharth Datthathreya Blog
            </NavbarBrand>
          </div>
        </Navbar>
      <h1 className="shadow"> This is nothing!</h1>
    </div>
  );
}

export default App;
