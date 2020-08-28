import React from 'react';

import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">

      <div className='app__body'>
        {/* Sidebar */}
        <Sidebar></Sidebar>
        {/* Chatbox */}
      </div>
    </div>
  );
}

export default App;
