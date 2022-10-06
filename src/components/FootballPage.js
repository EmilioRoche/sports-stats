import React, {useEffect, useState} from "react";
import * as API from '../functions/API';

function FootballPage() {
    const [leagues, setLeagues] = useState([]);

    useEffect( () => {
        async function getLeagueData() {
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com/Football/Leagues");
            setLeagues(response.data);
        } getLeagueData();}, []);
    const useLeagues = leagues.map((league) => {
        return(
                <div class="col-lg-6 col-xl-4" style={{paddingBottom: "3em"}}>
                    <div class="card mb-5 mb-xl-0">
                        <div class="card-body p-5" style={{whiteSpace: "nowrap"}}>
                            <div class="mb-3" >
                                <span class="display-4 fw-bold" >{league.country}</span>
                            </div>
                            <span class="text-muted">{league.name}</span>
                            <div class="d-grid" style={{paddingTop: "1em"}}>
                                <div>
                                    <a class="btn btn-primary" href={league.endpoint+"/Standings"} style={{marginRight:"1em"}}>Standings</a>
                                    <a class="btn btn-primary" href={league.endpoint+"/Teams"} style={{marginLeft:"1em"}}>Teams</a>
                                </div>
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
                    <h2 class="fw-bolder">Pick a league</h2>
                </div>
                    <div class="row gx-5 justify-content-center">
                        {useLeagues}
                    </div>
                </div>
        </section>
        </>
    );
}

export default FootballPage;