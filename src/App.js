import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sports from './components/Sports';

function App(){
  return ( 
    <Router>
      <div className="App">
        <header className="App-header">
            <Routes>
            <Route path="/sports-stats" index element={<Sports />} />
            </Routes>
        </header>
      </div>
    </Router>
  );
}
export default App;
