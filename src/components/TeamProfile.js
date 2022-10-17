import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from '../functions/API';
import PlayerProfileTemplate from "./templates/PlayerProfileTemplate";
import TeamProfileTemplate from "./templates/TeamProfileTemplate";

function TeamProfile(){
    const {id, name} = useParams();
    const [team, setTeam] = useState([]);
    const [players, setPlayers] = useState([]);
    

    useEffect( () => {
        async function getTeamData() {
            let query = "https://stats-sports-api.herokuapp.com/Football/" + id + "/Teams/" + name;
            const response = await API.getAPI(query);
            const TeamData = response.data;
            setTeam(TeamData);
        } 
            getTeamData();
        },[id,name]);
    
        useEffect( () => {
            async function getPlayersData() {
                let query = "https://stats-sports-api.herokuapp.com/Football/" + id + "/" + name + "/Players";
                const response = await API.getAPI(query);
                const PlayersData = response.data;
                setPlayers(PlayersData);
            } 
                getPlayersData();
            },[id,name]);    

    const teamTemplate = TeamProfileTemplate(team);
    const playerTemplate = PlayerProfileTemplate(players);
    return(
        <>
        <div class="container">
            <div class="main-section">
                <div class="row gx-5">
                    <div class="col-lg-4 lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    {teamTemplate}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-8">
                            <div class="card mb-3">
                                <div class="card-body">
                                    {teamTemplate}
                                </div>
                            </div>
                        </div>

                </div>
                <div class="col-md-14">
                        <div class="card mb-3">
                            <div class="card-body">
                                {playerTemplate}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </>
    );
}
export default TeamProfile;