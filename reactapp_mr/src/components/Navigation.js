import React from 'react';
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
      <header className="header">
        <h2>React app</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Main page</Link>
            </li>
            <li>
              <Link to="/weather">Weather information</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  export default Navigation;