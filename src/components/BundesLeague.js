import React, {useEffect, useState} from "react";
import * as API from '../functions/API';
import Compare from '../functions/Compare';
import StandingsTemplate from "./StandingsTemplate";

function BundesLeague() {
    const [standings, setStandings] = useState([]);
    useEffect( () => {
        async function getBundesData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/Bundesliga");
            const bundesData = response.data;
            //bundesData.sort(Compare);
            setStandings(bundesData);
        } getBundesData();}, []);

    const template = StandingsTemplate(standings);
    return(
        <>
        {template}
        </>
    )
}

export default BundesLeague;