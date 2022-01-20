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
              <li className="homelink"><Link to='/home'>Home</Link></li>



              <li className="resumelink"><a href="./resume.html">Resume</a></li>


              <li className="aboutlink"><Link to='/about'>About</Link></li>








              <li className="contactlink"><a href="./contact.html">Contact</a></li>
            </ul>
          </div>
        </nav>
    );
  }
}
