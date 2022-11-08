/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
      <nav className="dFlex nav">
        <h1 className="fsizeBig fw400"> Bookstore CMS </h1>
        <ul className="dFlex menu fs175">
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>

      </nav>
    );

}
export default Navbar;
