import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Hero">
      <header className="hero">
        <div className="hero-text">
          <h1>Goerli faucets are dry, Help Web3 devs build the future</h1>
        </div>
        <div className="hero-actions">
          <button>Send ether</button> using an address and{" "}
          <button>
            <a href="#discover">discover</a>
          </button>{" "}
          addresses
        </div>
      </header>
    </div>
  );
}
