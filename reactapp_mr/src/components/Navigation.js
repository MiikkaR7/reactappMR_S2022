import React from 'react';
import "./Navigation.css";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      <header className="header">
        <h2>React weather app</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Weather information</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  export default Navigation;