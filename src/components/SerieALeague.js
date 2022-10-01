import React, {useEffect, useState} from "react";
import * as API from '../functions/API';
import StandingsTemplate from "./StandingsTemplate";
import TeamsTemplate from "./TeamsTemplate";

function SerieALeague() {
    const [standings, setStandings] = useState([]);
    const [teams, setTeams] = useState([]);
    useEffect( () => {
        async function getSerieAData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/SerieA");
            const serieAData = response.data;
            //serieAData.sort(Compare);
            setStandings(serieAData);
        } getSerieAData();}, []);
    useEffect( () => {
        async function getTeamData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/SerieA/Teams");
            const serieTeamData = response.data;
            setTeams(serieTeamData);
        } getTeamData();}, []);

    const template1 = StandingsTemplate(standings);

    const template2 = TeamsTemplate(teams, 'SerieA');
    return(
        <>
        <div style={{ display: "inline"}}>
            {template1}
            {template2}
        </div>
        </>
    )
}

export default SerieALeague;