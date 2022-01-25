import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const links = [
      {
        id: 1,
        path: '/',
        text: 'Books',
      },
      {
        id: 2,
        path: '/categories',
        text: 'Categories',
      },
    ];

  return(
    <header>
      <nav>
        <h2>Bookstore v1.0</h2>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} exact>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
)
};

export default Navbar;
