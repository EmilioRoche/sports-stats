import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sports from './components/Sports';
import Nav from './components/Nav';

function App(){
  return ( 
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav>
          <Routes>
            <Route path="/sports-stats" index element={<Sports />} />
            </Routes>
          </Nav>
        </header>
      </div>
    </Router>
  );
}
export default App;
