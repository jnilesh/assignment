import React from 'react';
import './App.css';
import Main from './components/MainComponent'
import { BrowserRouter, StaticRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <StaticRouter >
          <div>
            <Main />
          </div>
        </StaticRouter >
    </div>
  );
}

export default App;
