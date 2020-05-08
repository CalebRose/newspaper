import React from 'react';
import './App.css';
import Head from './Components/Header/Head';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import News_4e0508 from './Components/4e0508/4e0408';
import routes from './Constants/routes';
import About from './Components/About/About';

function App() {
  return (
    <Router>
      <div className='App'>
        <Head />
        <Route exact path={routes.LATEST} component={News_4e0508} />
        <Route exact path={routes.ABOUT} component={About} />
      </div>
    </Router>
  );
}

export default App;
