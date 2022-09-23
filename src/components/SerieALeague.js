import React, {useEffect, useState} from "react";
import * as API from '../functions/API';
import Compare from '../functions/Compare';
import StandingsTemplate from "./StandingsTemplate";

function SerieALeague() {
    const [standings, setStandings] = useState([]);
    useEffect( () => {
        async function getSerieAData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/SerieA");
            const serieAData = response.data.data[0].standings_rows;
            serieAData.sort(Compare);
            setStandings(serieAData);
        } getSerieAData();}, []);

    const template = StandingsTemplate(standings);
    return(
        <>
        {template}
        </>
    )
}

export default SerieALeague;