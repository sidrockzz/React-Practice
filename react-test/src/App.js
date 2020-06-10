import React, {Component} from 'react';
import logo from './logo.svg';
import { Navbar } from '../node_modules/reactstrap';
import './App.css';
import NavbarBrand from "reactstrap/es/NavbarBrand";
import Menu from './components/MenuComponent';
import {DISHES} from "./shared/dishes";

// Bootsrap component added into the code using reatstrap

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            dishes:DISHES
        };
    }
    render() {
        return (
            <div >
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">
                            Siddharth Datthathreya Blog
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes }/>
            </div>
        );
    }


}

export default App;
