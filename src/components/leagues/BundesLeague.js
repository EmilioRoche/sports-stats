import React, {useEffect, useState} from "react";
import * as API from '../../functions/API';
import StandingsTemplate from "../templates/StandingsTemplate";
import TeamsTemplate from "../templates/TeamsTemplate";

function BundesLeague() {
    const [standings, setStandings] = useState([]);
    const [teams, setTeams] = useState([]);
    useEffect( () => {
        async function getBundesData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/Bundesliga");
            const bundesData = response.data;
            setStandings(bundesData);
        } getBundesData();}, []);
    
    useEffect( () => {
        async function getTeamData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/Bundesliga/Teams");
            const bundesTeamData = response.data;
            setTeams(bundesTeamData);
        } getTeamData();}, []);

    const template1 = StandingsTemplate(standings);
    const template2 = TeamsTemplate(teams, 'Bundesliga');

    return(
        <>
        <div style={{ display: "inline"}}>
            {template1}
            {template2}
        </div>
        </>
    )
}

export default BundesLeague;