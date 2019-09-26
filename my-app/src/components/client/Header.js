import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <ul>
                <li><NavLink activeClassName="active" to="/home" exact>Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/home/books">Books</NavLink></li>
                <li><NavLink activeClassName="active" to="/home/sales">Sales</NavLink></li>
            </ul>
            
      </header>
    );
}

export default Header;
