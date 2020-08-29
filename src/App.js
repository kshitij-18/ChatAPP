import React from 'react';

import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import { Router, Route } from 'react-router-dom';
import { Switch } from '@material-ui/core';


function App() {
  return (
    <div className="app">

      <div className='app__body'>
        <Router>
          <Switch>
            <Route path='/app'>
              {/* Sidebar */}
              <Sidebar></Sidebar>
              {/* Chatbox */}
              <Chat />
            </Route>
            <Route path='/'>
              <h1>Home Screen</h1>
            </Route>
          </Switch>

        </Router>
      </div>
    </div>
  );
}

export default App;
