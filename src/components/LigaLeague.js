import React, {useEffect, useState} from "react";
import * as API from '../functions/API';
import StandingsTemplate from "./StandingsTemplate";

function LigaLeague() {
    const [standings, setStandings] = useState([]);
    useEffect( () => {
        async function getLigaData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/LaLiga");
            const ligaData = response.data;
            //ligaData.sort(Compare);
            setStandings(ligaData);
        } getLigaData();}, []);

    const template = StandingsTemplate(standings);
    return(
        <>
        {template}
        </>
    )
}

export default LigaLeague;