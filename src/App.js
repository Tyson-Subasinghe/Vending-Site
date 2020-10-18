import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './pages/home';
import {Healthy} from './pages/healthy';
import {Mission} from './pages/mission';
import {Typeform} from './pages/typeform';
import {NoMatch} from './pages/404';

import {NavBar} from './components/navigation/NavBubble.js';

import './App.css';

function App() {
  return (
    <React.Fragment>
        <NavBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/healthy" component={Healthy}/>
            <Route path="/drinks" component={Healthy}/>
            <Route path="/snacks" component={Healthy}/>
            <Route path="/mission" component={Mission}/>
            <Route path="/typeform" component={Typeform}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
