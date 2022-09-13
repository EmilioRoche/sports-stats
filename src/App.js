import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Content from './components/Content';
import Header from './components/Header';
import FootballPage from './components/FootballPage'

function App(){

  return ( 
    <Router>
          <Routes>
            <Route path="/sports-stats" element={<><Nav/><Header/><Content/></>}/>
            <Route path="/sports-stats/Football" element={<><Nav/><FootballPage/></>}/>
            </Routes>
        
    </Router>
  );
}
export default App;
