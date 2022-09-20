

function FootballPage() {
    //create a database for this
    const footballLeagues = [
        {
            "Country": "England",
            "League": "Premier League 22/23",
            "LeagueID": "317",
            "SeasonID": "18686"
        },
        {
            "Country": "Spain",
            "League": "La Liga 22/23",
            "LeagueID": "251",
            "SeasonID": "18973"
        },
        {
            "Country": "Germany",
            "League": "Bundesliga 22/23",
            "LeagueID": "512",
            "SeasonID": "18717"
        },
        {
            "Country": "Italy",
            "League": "Serie A 22/23",
            "LeagueID": "592",
            "SeasonID": "18977"
        },
        {
            "Country": "France",
            "League": "Ligue 1 22/23",
            "LeagueID": "498",
            "SeasonID": "18715"
        },
        {
            "Country": "Canada",
            "League": "CPL 22/23",
            "LeagueID": "435",
            "SeasonID": "13379"
        }
    ]
    const useLeagues = footballLeagues.map((league) => {
        return(
                <div class="col-lg-6 col-xl-4" style={{paddingBottom: "3em"}}>
                    <div class="card mb-5 mb-xl-0">
                        <div class="card-body p-5" style={{whiteSpace: "nowrap"}}>
                            <div class="mb-3" >
                                <span class="display-4 fw-bold" >{league.Country}</span>
                            </div>
                            <span class="text-muted">{league.League}</span>
                            <div class="d-grid" style={{paddingTop: "1em"}}><a class="btn btn-primary" href="#!">Choose League</a></div>
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