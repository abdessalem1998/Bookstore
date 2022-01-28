import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import navStyle from './Navbar.module.css';

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

  return (
    <header className={navStyle.header}>
      <nav>
        <h2>Bookstore CMS</h2>
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
      <div className={navStyle.header}>
        <ImUser className={navStyle.icon} />
      </div>
    </header>
  );
};

export default Navbar;
