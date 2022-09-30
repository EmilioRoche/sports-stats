import React, {useEffect, useState} from "react";
import * as API from '../functions/API';
import Compare from '../functions/Compare';
import StandingsTemplate from "./StandingsTemplate";

function PremLeague(props) {
    //const leagueID = props.location.state;

    const [standings, setStandings] = useState([]);
    useEffect( () => {
        async function getPremData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/Prem");
            const premData = response.data;
            //premData.sort(Compare);
            setStandings(premData);
        } getPremData();}, []);

    const template = StandingsTemplate(standings);
    return(
        <>
        {template}
        </>
    )
}

export default PremLeague;