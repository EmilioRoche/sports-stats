import React, {useEffect, useState} from "react";
import * as API from '../functions/API';
import StandingsTemplate from "./StandingsTemplate";

function LigueLeague() {
    const [standings, setStandings] = useState([]);
    useEffect( () => {
        async function getLigueData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/Ligue1");
            const ligueData = response.data;
            //ligueData.sort(Compare);
            setStandings(ligueData);
        } getLigueData();}, []);

    const template = StandingsTemplate(standings);
    return(
        <>
        {template}
        </>
    )
}

export default LigueLeague;