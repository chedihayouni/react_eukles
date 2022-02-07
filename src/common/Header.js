import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="d-flex align-items-center justify-content-between">
      <h1 className="logo my-0 font-weight-normal h4">
        Eukles test
        </h1>
      <div className="navigation d-flex justify-content-end">
        <Nav>
          <NavItem>
            <NavLink tag={Link} to="/dashboard">
              Tableau de bord
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/store">
              Ajouter des données
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </header>
  );
}


export default Header;
