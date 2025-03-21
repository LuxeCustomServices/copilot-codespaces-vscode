import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import BDECreations from './components/BDECreations';
import LuxeCustomServices from './components/LuxeCustomServices';
import FNBBQSAUCE from './components/FNBBQSAUCE';
import TatesHomeServices from './components/TatesHomeServices';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/bde-creations" component={BDECreations} />
        <Route path="/luxe-custom-services" component={LuxeCustomServices} />
        <Route path="/fnbbqsauce" component={FNBBQSAUCE} />
        <Route path="/tates-home-services" component={TatesHomeServices} />
      </Switch>
    </Router>
  );
}

export default App;
