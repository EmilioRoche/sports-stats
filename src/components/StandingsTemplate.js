import React from "react";

//fix this so to separate content.js with maintextbox
function StandingsTemplate(league) {
    const standings = league;
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
    );
}
export default StandingsTemplate;