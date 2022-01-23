import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Home } from './pages/Home/Home.js';
import { Resume } from './pages/Resume/Resume.js';
import { About } from './pages/About/About.js';
import { Contact } from './pages/Contact/Contact.js';
import { Project } from './pages/Project/Project.js';

class Index extends React.Component{
  render() {
    return(
      <Router>
        <Routes>
          <Route path='/' element=<Home /> />
          <Route path='/resume' element=<Resume /> />
          <Route path='/about' element=<About /> />
          <Route path='/contact' element=<Contact /> />
          <Route path='/project' element=<Project /> />
        </Routes>
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
