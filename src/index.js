import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { Home } from './pages/Home/Home.js';

class Index extends React.Component{
  render() {
    return(
      <Home />
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
