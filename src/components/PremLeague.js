import React, {useEffect, useState} from "react";
import * as API from '../functions/API';
import StandingsTemplate from "./StandingsTemplate";
import TeamsTemplate from "./TeamsTemplate";

function PremLeague(props) {
    //const leagueID = props.location.state;

    const [standings, setStandings] = useState([]);

    const [teams, setTeams] = useState([]);

    useEffect( () => {
        async function getPremData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/Prem");
            const premData = response.data;
            setStandings(premData);
        } getPremData();}, []);
    
    useEffect( () => {
        async function getTeamData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/Prem/Teams");
            const premTeamData = response.data;
            setTeams(premTeamData);
        } getTeamData();}, []);

    const template1 = StandingsTemplate(standings);

    const template2 = TeamsTemplate(teams, 'Prem');
    return(
        <>
        <div style={{ display: "inline"}}>
            {template1}
            {template2}
        </div>
        </>
    )
}

export default PremLeague;