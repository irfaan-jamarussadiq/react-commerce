import React from "react";
import logo from "./images/react-logo.png";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <ul id="nav-list">
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#collections">Collections</a>
          </li>
          <li>
            <a href="#account">Account</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
