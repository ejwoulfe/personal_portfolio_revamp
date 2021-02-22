import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/navigation/navigation';
import Banner from './components/banner/banner';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import About from './components/about/about';
import Contact from './components/contact/contact';
import ToTopButton from './components/toTopButton/to_top_button';

ReactDOM.render(
  <React.StrictMode>
    <div id="main_content">
      <Navigation></Navigation>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      <ToTopButton></ToTopButton>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
