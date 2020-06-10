import React from 'react';
import logo from './logo.svg';
import { Navbar } from '../node_modules/reactstrap';
import './App.css';
import NavbarBrand from "reactstrap/es/NavbarBrand";
import Menu from './components/MenuComponent';
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
        <Menu />
    </div>
  );
}

export default App;
