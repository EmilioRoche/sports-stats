import React, {useEffect, useState} from "react";
import * as API from '../functions/API';
import StandingsTemplate from "../templates/StandingsTemplate";
import TeamsTemplate from "../templates/TeamsTemplate";

function LigueLeague() {
    const [standings, setStandings] = useState([]);
    const [teams, setTeams] = useState([]);
    useEffect( () => {
        async function getLigueData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/Ligue1");
            const ligueData = response.data;
            setStandings(ligueData);
        } getLigueData();}, []);
    useEffect( () => {
        async function getTeamData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/Ligue1/Teams");
            const ligueTeamData = response.data;
            setTeams(ligueTeamData);
        } getTeamData();}, []);

    const template1 = StandingsTemplate(standings);

    const template2 = TeamsTemplate(teams, 'Ligue1');
    return(
        <>
        <div style={{ display: "inline"}}>
            {template1}
            {template2}
        </div>
        </>
    )
}

export default LigueLeague;