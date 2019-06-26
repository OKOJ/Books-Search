import React from "react";
import "./style.css";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">

    <a className="navbar-brand" href="/"><img src="https://img.icons8.com/color/38/000000/google-logo.png" alt=""></img>  BOOK-SEARCH</a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="basicExampleNav">

    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/">Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/saved">Saved</a>
      </li>
    </ul>
    </div>
    </nav>
  );
}

export default Nav;
