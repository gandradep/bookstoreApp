import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="dFlex nav alignCenter">
    <div className="dFlex subNav  montse alignCenter">
      <h1 className="fsizeBig bold"> Bookstore CMS </h1>
      <ul className="dFlex menu fs175">
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <button type="button" className="userButton">
      <i className="fa-solid fa-user userIcon" />
    </button>

  </nav>
);

export default Navbar;
