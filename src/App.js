import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './pages/home';
import {Healthy} from './pages/healthy';
import {Mission} from './pages/mission';
import {Faq} from './pages/faq';
import {Drinks} from './pages/drinks';
import {Snacks} from './pages/snacks';
import {Machines} from './pages/machines';
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
            <Route path="/mission" component={Mission}/>
            <Route path="/machines" component={Machines}/>
            <Route path="/healthyoptions" component={Healthy}/>
            <Route path="/drinks" component={Drinks}/>
            <Route path="/snacks" component={Snacks}/>
            <Route path="/faq" component={Faq}/>
            <Route path="/typeform" component={Typeform}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
