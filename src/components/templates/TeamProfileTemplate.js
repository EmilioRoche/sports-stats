

function TeamProfileTemplate(element){
    const useProfile = element.map((profile) => {
        return (
            <div class="mt-3">
                <img src={profile.logo} alt="Team-Logo" class="rounded-circle" width="150"/>
                <h4>{profile.team_name}</h4>
                <p class="text-secondary mb-1">Manager: {profile.manager_id}</p>
                <p class="text-muted font-size-sm">Venue: {profile.venue_id}</p>
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