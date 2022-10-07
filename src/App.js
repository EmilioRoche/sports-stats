import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
//import Content from './components/Content';
import Header from './components/Header';
import FootballPage from './components/FootballPage';

import Error from './components/Error';
import TeamProfile from './components/TeamProfile';
//import Standings from './components/Standings';
//import Teams from './components/Teams';

const LazyStandings = React.lazy(() => import('./components/Standings'));
const LazyTeams = React.lazy(() => import('./components/Teams'));

function App(){

  return ( 
    <Router basename={process.env.BASEURL}>
          <Routes>
            <Route path="/sports-stats" element={<><Nav/><Header/><FootballPage/></>}/>
            <Route path="/sports-stats/Football/:id/Standings" element={<><Nav/><React.Suspense fallback='Loading content...'><LazyStandings/></React.Suspense></>}/>
            <Route path="/sports-stats/Football/:id/Teams" element={<><Nav/><React.Suspense fallback='Loading content...'><LazyTeams/></React.Suspense></>}/>
            <Route path="/sports-stats/Football/:id/Teams/:name" element={<><Nav/><TeamProfile/></>}/>
            <Route path="*" element={<Error></Error>}/>
          </Routes>
    </Router>
  );
}
export default App;
