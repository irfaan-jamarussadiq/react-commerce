import React from "react";
import logo from "./images/react-logo.png";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <ul id="nav-list">
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
