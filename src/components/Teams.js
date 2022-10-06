import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as API from '../functions/API';
import TeamsTemplate from "./templates/TeamsTemplate";

function Teams(){
    const {id} = useParams();
    const [teams, setTeams] = useState([]);
    

    useEffect( () => {
        async function getTeamsData() {
            let query = "https://stats-sports-api.herokuapp.com/Football/" + id + "/Teams";
            const response = await API.getAPI(query);
            const TeamsData = response.data;
            setTeams(TeamsData);
        } 
            getTeamsData();
        },[id]);

    const template = TeamsTemplate(teams, id);
    return(
        <>
        {template}
        </>
    );
}
export default Teams;