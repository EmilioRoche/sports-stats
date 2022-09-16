import React, {useEffect, useState} from "react";
import axios from 'axios';

function FootballPage(props) {
    //const leagueID = props.location.state;

    const [standings, setStandings] = useState([]);
    useEffect( () => {load();}, []);

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
    async function load() {
        await axios.get("https://stats-sports-api.herokuapp.com/Football").then(response => {
            console.log(response);
            if(response.data.message !== "You have exceeded the MONTHLY quota for Requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/tipsters/api/sportscore1"){
                const premierFootballData = response.data.data[0].standings_rows;
                premierFootballData.sort(compare);
                //console.log(premierFootballData);
                setStandings(premierFootballData);
            }
        }).catch(error => console.error(`Error: ${error}`));
        /* need to fix this where it goes to MainTextBox
        return(
            <MainTextBox data={sport}/>
        )*/
    }

    function compare(a,b) {
        const positionA = a.position;
        const positionB = b.position;
        let comparison = 0;
        if(positionA > positionB){
            comparison = 1;
        }
        else if(positionA < positionB){
            comparison = -1;
        }
        return comparison;
    }
}

export default FootballPage;