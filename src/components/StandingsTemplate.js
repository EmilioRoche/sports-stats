import React from "react";

//fix this so to separate content.js with maintextbox
function StandingsTemplate(league) {
    const standings = league;
    const useStandings = standings.map((teamData) => {
        return(
            <tbody>
                <tr class="col">
                    <td>{teamData.position}</td>
                    <td>{teamData.name}</td>
                    <td>{teamData.matches}</td>
                    <td>{teamData.wins}</td>
                    <td>{teamData.draws}</td>
                    <td>{teamData.losses}</td>
                    <td>{teamData.goal_diff}</td>
                    <td>{teamData.points}</td>
                </tr>
            </tbody>
        )
    })
    return(
        <section class="bg-light py-5 border-bottom">
             <div class="container px-5 my-5">
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
             </div>
        </section>
    );
}
export default StandingsTemplate;