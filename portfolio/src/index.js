import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Navigation from './components/navigation/navigation';
import Banner from './components/banner/banner';
import reportWebVitals from './reportWebVitals';
import Skills from './components/skills/skills';

ReactDOM.render(
  <React.StrictMode>
    <div id="main_content">
      <Navigation></Navigation>
      <Banner></Banner>
      <Skills></Skills>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
