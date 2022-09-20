import React, {useEffect, useState} from "react";
import * as API from '../functions/API';
import Compare from '../functions/Compare';
import StandingsTemplate from "./StandingsTemplate";

function LigueLeague() {
    const [standings, setStandings] = useState([]);
    useEffect( () => {
        async function getLigueData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/Ligue1");
            const ligueData = response.data.data[0].standings_rows;
            ligueData.sort(Compare);
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