import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <ul style={{ display: "flex", justifyContent: "center" }}>
          <li style={{ listStyle: "none", paddingRight: "50px" }}>
            <NavLink to='/'>Counter</NavLink>
          </li>
          <li style={{ listStyle: "none", paddingRight: "50px" }}>
            <NavLink to='/user'>User List</NavLink>
          </li>
          <li style={{ listStyle: "none", paddingRight: "50px" }}>
            <NavLink to='/todo'>Todo List</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
