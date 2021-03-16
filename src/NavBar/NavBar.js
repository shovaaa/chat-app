import React from 'react';
import {
  Link
} from "react-router-dom";
import './NavBar.scss';

export default function NavBar() {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <Link to="/" className="btn">Home</Link>
          </li>
          <li>
            <Link to="/signin" className="btn">Sign In</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}