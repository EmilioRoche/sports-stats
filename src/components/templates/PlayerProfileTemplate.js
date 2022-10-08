

function PlayerProfileTemplate(element){
    const useProfile = element.map((profile) => {
        const height = profile.height;
        return (
            <div class="col-xl-6 col-lg-7 col-md-12">
                <div class="card profile-header">
                    <div class="body">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-12">
                                <div class="profile-image float-md-right"> 
                                    <img src={profile.photo} alt="Player"/>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-8 col-12">
                                <h4 class="m-t-0 m-b-0">{profile.player_name}</h4>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Age</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {profile.age}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Height</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {height}
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Age</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {profile.age}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Height</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {height}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Age</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {profile.age}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Height</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {height}
                                    </div>
                                </div>
                                
                            </div>         
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <>
        <div class="container profile-page">
            <div class="row">
                {useProfile}
            </div>
        </div>
        </>
    )
}
export default PlayerProfileTemplate;