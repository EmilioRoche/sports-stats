import React, {useEffect, useState} from "react";
import * as API from '../../functions/API';
import StandingsTemplate from "../templates/StandingsTemplate";
import TeamsTemplate from "../templates/TeamsTemplate";

function CPLLeague() {
    const [standings, setStandings] = useState([]);
    const [teams, setTeams] = useState([]);
    useEffect( () => {
        async function getCPLData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/CPL");
            const CPLData = response.data;
            setStandings(CPLData);
        } getCPLData();}, []);
    
    useEffect( () => {
        async function getTeamData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/CPL/Teams");
            const CPLTeamData = response.data;
            setTeams(CPLTeamData);
        } getTeamData();}, []);

    const template1 = StandingsTemplate(standings);

    const template2 = TeamsTemplate(teams, 'CPL');
    return(
        <>
        <div style={{ display: "inline"}}>
            {template1}
            {template2}
        </div>
        </>
    )
}

export default CPLLeague;