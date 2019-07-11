import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Router>
    <div className="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/directors">Directors</NavLink>
    <NavLink to="/movies">Movies</NavLink>
    <NavLink to="/actors">Actors</NavLink>
    </div>
    </Router>
  );
};

export default NavBar;
