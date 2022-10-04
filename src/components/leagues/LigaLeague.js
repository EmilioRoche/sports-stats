import React, {useEffect, useState} from "react";
import * as API from '../functions/API';
import StandingsTemplate from "../templates/StandingsTemplate";
import TeamsTemplate from "../templates/TeamsTemplate";

function LigaLeague() {
    const [standings, setStandings] = useState([]);
    const [teams, setTeams] = useState([]);
    useEffect( () => {
        async function getLigaData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/LaLiga");
            const ligaData = response.data;
            setStandings(ligaData);
        } getLigaData();}, []);
    useEffect( () => {
        async function getTeamData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/LaLiga/Teams");
            const ligaTeamData = response.data;
            setTeams(ligaTeamData);
        } getTeamData();}, []);

    const template1 = StandingsTemplate(standings);

    const template2 = TeamsTemplate(teams, 'LaLiga');
    return(
        <>
        <div style={{ display: "inline"}}>
            {template1}
            {template2}
        </div>
        </>
    )
}

export default LigaLeague;