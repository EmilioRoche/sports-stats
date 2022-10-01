import React, {useEffect, useState} from "react";
import * as API from '../functions/API';
import StandingsTemplate from "./StandingsTemplate";

function SerieALeague() {
    const [standings, setStandings] = useState([]);
    useEffect( () => {
        async function getSerieAData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/SerieA");
            const serieAData = response.data;
            //serieAData.sort(Compare);
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