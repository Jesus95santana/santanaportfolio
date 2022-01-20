import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Home } from './pages/Home/Home.js';
import { About } from './pages/About/About.js';

class Index extends React.Component{
  render() {
    return(
      <Router>
        <Routes>
          <Route path='/home' element=<Home /> />
          <Route path='/about' element=<About /> />
        </Routes>
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
