

function TeamProfileTemplate(element){
    const useProfile = element.map((profile) => {
        return (
            <div class="mt-3">
                <img src={profile.logo} alt="Team-Logo" class="rounded" width="155"/>
                <h4>{profile.team_name}</h4>
                <p class="text-secondary mb-1"><strong>Venue: </strong>{profile.stadium_name}</p>
                <p class="text-secondary mb-1"><strong>Capacity: </strong>{profile.capacity || "unavailable"}</p>
                <p class="text-secondary mb-1"><strong>Country: </strong>{profile.country_name}</p>
            </div>
            
        )
    })
    const useCoach = element.map((profile) => {
        return(
            <div class="mt-3">
                <img src={profile.photo} alt="Team-Logo" class="rounded" width="200"/>
                <h4>{profile.manager_name}</h4>
                
            </div>
        )
    })
    return(
        <>
        <div class="col-lg-4 lg-12" style={{marginRight: "11em"}}>
            <div class="card mb-4 box-shadow h-100 bg-light">
                <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                        {useProfile}
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 lg-12" style={{marginLeft: "12em"}}>
            <div class="card mb-4 box-shadow h-100 bg-light" style={{textAlign: "center"}}>
                <div class="card-body">
                <h3><strong>Manager</strong></h3>
                    <div class="d-flex flex-column align-items-center text-center">
                        {useCoach}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default TeamProfileTemplate;