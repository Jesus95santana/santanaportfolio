import React from 'react';
import { Navigation } from '../../components/navigation_banner/Navigation.js';
import './Home.css';

export class Home extends React.Component{
  render() {
    return(
      <>
        <Navigation />

        <main className="homemain">
          <div className="homebackpic">
            <section className="subhead">
              <h1>Jesus Santana</h1>
              <h4>Web Developer & Programmer</h4>
              <div className="mainbutton">
                <span><a href="project.html">Projects</a></span>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }
}
