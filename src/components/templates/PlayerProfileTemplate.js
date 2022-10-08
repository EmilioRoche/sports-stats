import CurrencyConv from "../../functions/CurrencyConv";

function PlayerProfileTemplate(element){
    const useProfile = element.map((profile) => {
        const height = profile.height;
        const currency = CurrencyConv(profile.market_value);
        return (
            <div class="col-xl-6 col-lg-7 col-md-12" style={{paddingBottom: "2em"}}>
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
                                    <div class="col-6">
                                        <h6 class="mb-14"><strong>Position</strong></h6>
                                    </div>
                                    <div class="col-6 text-secondary">
                                        {profile.position_name}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <h6 class="mb-0"><strong>Shirt Number</strong></h6>
                                    </div>
                                    <div class="col-6 text-secondary">
                                        {profile.shirt_number}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <h6 class="mb-0"><strong>Nationality</strong></h6>
                                    </div>
                                    <div class="col-6 text-secondary">
                                        {profile.nationality}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <h6 class="mb-0"><strong>Preferred Foot</strong></h6>
                                    </div>
                                    <div class="col-6 text-secondary">
                                        {profile.preferred_foot}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <h6 class="mb-14"><strong>Age</strong></h6>
                                    </div>
                                    <div class="col-6 text-secondary">
                                        {profile.age}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <h6 class="mb-0"><strong>Height</strong>(Metres)</h6>
                                    </div>
                                    <div class="col-6 text-secondary">
                                        {(Math.round(height*100)/100).toFixed(2)}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <h6 class="mb-0"> <strong>Market Val.</strong>({profile.market_currency})</h6>
                                    </div>
                                    <div class="col-6 text-secondary">
                                        {currency}
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