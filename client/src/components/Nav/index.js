import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="navbar-brand">
        React Reading List
      </div>
      <a className="navbar-item" href="/">
        Search
      </a>
      <a className="navbar-item" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
