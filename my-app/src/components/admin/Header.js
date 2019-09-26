import React from 'react';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="App-header">
            <h1>Admin</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
                <li><NavLink activeClassName="active" to="/admin" exact>Dashboard</NavLink></li>
                <li><NavLink activeClassName="active" to="/admin/products">Products</NavLink></li>
                <li><NavLink activeClassName="active" to="/admin/banners">Banners</NavLink></li>
            </ul>
      </header>
    );
}

export default Header;
