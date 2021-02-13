import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => (
  <div className="header">
    <span className="logo">CompanyLogo</span>
    <div className="header-right">
      <NavLink to="/card" activeClassName="active">
        Card
      </NavLink>
      <NavLink to="/reactquery" activeClassName="active">
        React Query
      </NavLink>
      <NavLink to="/olympics" activeClassName="active">
        Olympics
      </NavLink>
    </div>
  </div>
);

export default Header;
