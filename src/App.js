import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
//import Content from './components/Content';
import Header from './components/Header';
import FootballPage from './components/FootballPage';

import Error from './components/Error';
import Standings from './components/Standings';
import Teams from './components/Teams';

function App(){
//<Route path="/sports-stats" element={<><Nav/><Header/><Content/></>}/>
/*

*/
  return ( 
    <Router basename={process.env.BASEURL}>
          <Routes>
            <Route path="/sports-stats" element={<><Nav/><Header/><FootballPage/></>}/>
            <Route path="/sports-stats/Football/:id/Standings" element={<><Nav/><Standings/></>}/>
            <Route path="/sports-stats/Football/:id/Teams" element={<><Nav/><Teams/></>}/>
            <Route path="*" element={<Error></Error>}/>
          </Routes>
    </Router>
  );
}
export default App;
