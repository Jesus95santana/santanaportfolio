import React from 'react';
import './About.css';
import { Navigation } from '../../components/navigation_banner/Navigation.js';

export class About extends React.Component{
  render() {
    return(
      <>
        <Navigation />
        <main class="aboutmain">
        <div class="aboutbackpic">
          <section class="aboutsec1">
            <h3>Who Am I?</h3>
            <p>I have finished my two-year basic core classes in Georgia Gwinnett College and wish to peruse a job in the tech industry. I took classes for Python, Html, and Css at GGC but later decided to experiment other career choices before committing. I went from being a Banker/Accountant in Associated Credit Union to a Piano/Spanish teacher at The University of West Georgia. Despite my hiatus, I’ve built computers and explored coding within many linux distros as hobby. My goal is to establish a growing career as a software developer, expanding my knowledge in technology and enhancing my problem solving skills. Frameworks, Languages, and Software are always expanding with new updates and features so my learning journey is never ending.</p>
          </section>
          <section class="aboutsec2">
            <h3>Why Program?</h3>
            <p>Theres plenty of reasons anyone could benefit from becoming a programmer. Some people like the income that it provides, while others seek a stable job. While I admit that the career provides job security and benefits from corperations, those attributes are not what drive me into the field. I have attempted many jobs and careers to seek where my talents and traits could thrive in, however none of those employers provided the satisfaction and challenge that coding does. I program because of my love for technology and the sence of accomplishment that comes with it. Programming is not for everyone and I had seccond thoughts about my abilities in college. But as time passed, I realized no one is perfect in coding. Failure is a discovery into learning something new. </p>
          </section>
        </div>
      </main>
      </>
    );
  }
}
