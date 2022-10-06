import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as API from '../functions/API';
import StandingsTemplate from "./templates/StandingsTemplate";
//import TeamsTemplate from "../templates/TeamsTemplate";

function Standings(){
    const {id} = useParams();
    const [standings, setStandings] = useState([]);
    

    useEffect( () => {
        async function getStandingsData() {
            let query = "https://stats-sports-api.herokuapp.com/Football/" + id;
            const response = await API.getAPI(query);
            const standingsData = response.data;
            setStandings(standingsData);
        } 
            getStandingsData();
        },[id]);

    const template = StandingsTemplate(standings);
    return(
        <>
        {template}
        </>
    );
}
export default Standings;