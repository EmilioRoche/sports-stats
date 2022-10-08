import React from "react";

function TeamsTemplate(teams, leagueName) {
    var path = '/sports-stats/Football/' + leagueName;
    const useTeams = teams.map((element) => {
        return(
            <div key={element.team_id} class="col-lg-6 col-xl-4" style={{paddingBottom: "3em"}}>
                    <div class="card mb-5 mb-xl-0">
                        <div class="card-body p-5">
                            <div class="mb-3" style={{ display: "flex", flexDirection: "row"}}>
                                <img alt={element.team_name} src={element.logo} style={{width: '40%'}}></img>
                                <span class="text-muted" style={{paddingLeft: "2em", paddingTop: "2em"}}>{element.team_name}</span>
                            </div>
                            <div class="d-grid" style={{paddingTop: "1em"}}>
                                <a class="btn btn-primary" href={path + "/Teams/" + element.team_id}>
                                    Details</a>
                                </div>
                        </div>
                    </div>
                </div>
        )
    })
    return(
        <>
        <section class="bg-light py-5 border-bottom">
            <div class="container px-5 my-5">
                <div class="text-center mb-5">
                    <h1 class="headin">Teams</h1>
                </div>
                    <div class="row gx-5 justify-content-center">
                        {useTeams}
                    </div>
                </div>
        </section>
        </>
    );
}
export default TeamsTemplate;