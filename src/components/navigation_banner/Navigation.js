import React from 'react';
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
              <li className="homelink"><a href="./index.html">Home</a></li>
              <li className="resumelink"><a href="./resume.html">Resume</a></li>
              <li className="aboutlink"><a href="./about.html">About Me</a></li>
              <li className="contactlink"><a href="./contact.html">Contact</a></li>
            </ul>
          </div>
        </nav>
    );
  }
}
