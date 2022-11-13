import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="brand-name">
          <b>HelpGoerli</b>
        </div>
        <ul className="nav-list">
          <li className="nav-link">
            <a href="#discover">Discover</a>
          </li>
          <li className="nav-link">
            <a href="#donate">Donate</a>
          </li>
          <li className="nav-link">
            <button className="nav-btn">Connect Wallet</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
