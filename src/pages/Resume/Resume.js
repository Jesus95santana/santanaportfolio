import React from 'react';
import { Navigation } from '../../components/navigation_banner/Navigation.js';
import './Resume.css';

import { Link } from 'react-router-dom';

import HtmlPic from '../../images/html.png';
import CssPic from '../../images/css.png';
import JsPic from '../../images/js.png';
import PyPic from '../../images/py.png';

import { ResumeViewer } from '../ResumeViewer/ResumeViewer.js';

export class Resume extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <main className="resumemain">
          <div className="resumebackpic">
            <section className="education">
              <h3>Education</h3>
              <article className="first">
                <h4>Info Technology/Programming 2016</h4>
                <h5>Georgia Gwinnett College, Lawrenceville, GA</h5>
                <p>GGC was the first college I attended. My goal was to simply graduate with an Associates Degree. I have always maintained a GPA score above 3.0 and completed all basic courses. Due to my love for technology, I decided to try and spend an additional year to discover how to program. I started taking programming courses and website development classes and deemed it very fascinating. The concept of problem solving and learning a new language was a massive challenge to me. With patience, perseverance, and practice It became straightforward along the way. Seeing as this was my first career choice at the age of 18, I was curious about other professions and decided to explore my options before committing to any career field. </p>
              </article>
              <article className="seccond">
                <h4>Spanish & Piano Pedagogy 2019</h4>
                <h5>University Of West Georgia, Carrolton, GA</h5>
                <p>Diving into my passion in teaching, I have extended to become an educational instructor for both Spanish and Fine Arts (Piano Pedagogy). My GPA continued to stay above 3.0 and was awarded scholarships for my performance in playing the Piano. I taught kids to play piano and guitar after school in the Pippin Music Academy for income and experience. I enrolled in the UWG Spanish club as well to teach English and Spanish to local Hispanic/American churches. Unfortunately, Covid-19 hit the schools and colleges in carrolton and my studies were postponed. Upon deeper reflection of my career choice, I decided to revert back into becoming a programmer for a number of reasons. The primary reason being my love for technology.</p>
              </article>
            </section>
            <section className="skills">
              <h3>Learned Skills</h3>
              <div className="skillgrid">

                <figure className="htmlfig"><img src={HtmlPic} alt="html pic"/></figure>


                <figure className="cssfig"><img src={CssPic} alt="css pic"/></figure>
                <figure className="jsfig"><img src={JsPic} alt="javascript pic"/></figure>
                <figure className="pyfig"><img src={PyPic} alt="python pic"/></figure>
              </div>
            </section>
            <section className="resume">
              <h3>Resume</h3>


              <figure className="resumefig">
              <ResumeViewer />
              </figure>


              <span><Link to='/ResumeViewer'>Quick View</Link></span>


            </section>
          </div>
        </main>
      </>
    );
  }
}
