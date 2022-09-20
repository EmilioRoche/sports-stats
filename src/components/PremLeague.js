import React, {useEffect, useState} from "react";
//import axios from 'axios';
import * as API from '../functions/API';
import Compare from '../functions/Compare';

function PremLeague(props) {
    //const leagueID = props.location.state;

    const [standings, setStandings] = useState([]);
    useEffect( () => {
        async function getPremData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/Prem");
            const premData = response.data.data[0].standings_rows;
            premData.sort(Compare);
            setStandings(premData);
        } getPremData();}, []);

    const useStandings = standings.map((teamData) => {
        return(
            <tbody>
                <tr class="col">
                    <td>{teamData.position}</td>
                    <td>{teamData.team.name}</td>
                    <td>{teamData.fields.matches_total}</td>
                    <td>{teamData.fields.wins_total}</td>
                    <td>{teamData.fields.draws_total}</td>
                    <td>{teamData.fields.losses_total}</td>
                    <td>{teamData.fields.score_diff_formatted_total}</td>
                    <td>{teamData.fields.points_total}</td>
                </tr>
            </tbody>
        )
    })
    return(
        <div class="ptable">
            <h1 class="headin">Standings</h1>
                <table>
                    <tbody>
                    <tr class="col">
                        <th>#</th>
                        <th>Team</th>
                        <th>GP</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GD</th>
                        <th>PTS</th>
                    </tr>
                    </tbody>
                    {standings && useStandings}
                </table>
        </div>
    )
}

export default PremLeague;