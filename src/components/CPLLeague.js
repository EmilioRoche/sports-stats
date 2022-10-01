import React, {useEffect, useState} from "react";
import * as API from '../functions/API';
import StandingsTemplate from "./StandingsTemplate";

function CPLLeague() {
    const [standings, setStandings] = useState([]);
    useEffect( () => {
        async function getCPLData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/CPL");
            const CPLData = response.data;
            //CPLData.sort(Compare);
            setStandings(CPLData);
        } getCPLData();}, []);

    const template = StandingsTemplate(standings);
    return(
        <>
        {template}
        </>
    )
}

export default CPLLeague;