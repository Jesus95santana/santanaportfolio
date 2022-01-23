import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export class Navigation extends React.Component{
  render() {
    return(
        <nav className="navbar">
          <div className="navtitle">
            <h2>Santana Portfolio</h2>
          </div>
          <div className="navmenu">
            <ul>
              <li className="homelink"><Link to='/'>Home</Link></li>
              <li className="resumelink"><Link to='/resume'>Resume</Link></li>
              <li className="aboutlink"><Link to='/about'>About</Link></li>
              <li className="contactlink"><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
        </nav>
    );
  }
}
