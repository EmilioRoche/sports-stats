import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
//import Content from './components/Content';
import Header from './components/Header';
import FootballPage from './components/FootballPage';
import PremLeague from './components/leagues/PremLeague';
import SerieALeague from './components/leagues/SerieALeague';
import LigueLeague from './components/leagues/LigueLeague';
import CPLLeague from './components/leagues/CPLLeague';
import LigaLeague from './components/leagues/LigaLeague';
import BundesLeague from './components/leagues/BundesLeague';
import Error from './components/Error';

function App(){
//<Route path="/sports-stats" element={<><Nav/><Header/><Content/></>}/>
  return ( 
    <Router basename={process.env.BASEURL}>
          <Routes>
            <Route path="/sports-stats" element={<><Nav/><Header/><FootballPage/></>}/>
            <Route path="/sports-stats/Football/Prem" element={<><Nav/><PremLeague/></>}/>
            <Route path="/sports-stats/Football/LaLiga" element={<><Nav/><LigaLeague/></>}/>
            <Route path="/sports-stats/Football/Ligue1" element={<><Nav/><LigueLeague/></>}/>
            <Route path="/sports-stats/Football/SerieA" element={<><Nav/><SerieALeague/></>}/>
            <Route path="/sports-stats/Football/Bundesliga" element={<><Nav/><BundesLeague/></>}/>
            <Route path="/sports-stats/Football/CPL" element={<><Nav/><CPLLeague/></>}/>
            <Route path="*" element={<Error></Error>}/>
          </Routes>
    </Router>
  );
}
export default App;
