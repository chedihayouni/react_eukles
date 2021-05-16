import React from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../store/actions/auth.actions';
import { useDispatch } from 'react-redux';

import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="d-flex align-items-center justify-content-between">
      <h1 className="logo my-0 font-weight-normal h4">
        Laravel React
        </h1>
      <div className="navigation d-flex justify-content-end">
        <Nav>
          <NavItem>
            <NavLink tag={Link} to="/archive">
              Archive
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/dashboard">
              Dashboard
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Account
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => dispatch(actions.logout())}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </div>
    </header>
  );
}


export default Header;
