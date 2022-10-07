import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as API from '../functions/API';
import ProfileTemplate from "./templates/ProfileTemplate";

function TeamProfile(){
    const {id, name} = useParams();
    const [team, setTeam] = useState([]);
    

    useEffect( () => {
        async function getTeamData() {
            let query = "https://stats-sports-api.herokuapp.com/Football/" + id + "/Teams/" + name;
            const response = await API.getAPI(query);
            const TeamData = response.data;
            setTeam(TeamData);
        } 
            getTeamData();
        },[id,name]);

    const template = ProfileTemplate(team);
    return(
        <>
        <div>
            {template}
        </div>
        </>
    );
}
export default TeamProfile;