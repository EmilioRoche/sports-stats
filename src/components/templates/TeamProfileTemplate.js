

function TeamProfileTemplate(element){
    const useProfile = element.map((profile) => {
        return (
            <div class="mt-3">
                <img src={profile.logo} alt="Team-Logo" class="rounded" width="150"/>
                <h4>{profile.team_name}</h4>
                <p class="text-secondary mb-1"><strong>Venue: </strong>{profile.stadium_name}</p>
                <p class="text-secondary mb-1"><strong>Capacity: </strong>{profile.capacity} people</p>
                <p class="text-secondary mb-1"><strong>Country: </strong>{profile.country_name}</p>
                
            </div>
            
        )
    })
    return(
        <>
        {useProfile}
        </>
    )
}
export default TeamProfileTemplate;