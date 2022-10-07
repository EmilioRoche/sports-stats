import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as API from '../functions/API';
import TeamProfileTemplate from "./templates/TeamProfileTemplate";

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

    const template = TeamProfileTemplate(team);
    return(
        <>
        <div class="container">
            <div class="main-section">
                <div class="row gutters-sm">
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    {template}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default TeamProfile;