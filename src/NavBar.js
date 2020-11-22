import React from "react";
import logo from "../public/images/react-logo.PNG";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <ul id="nav-list">
          <img src={logo} alt="react-logo" className="logo" />
  
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
