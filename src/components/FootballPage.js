import React, {useEffect, useState} from "react";
import axios from 'axios';

function FootballPage(props) {
    //const leagueID = props.location.state;

    const [standings, setStandings] = useState([]);
    useEffect( () => {load();}, []);
    return(
        <div>
            {standings}
        </div>
    )
    async function load() {
        await axios.get("https://stats-sports-api.herokuapp.com/Football").then(response => {
            console.log(response);
            if(response.data.message !== "You have exceeded the MONTHLY quota for Requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/tipsters/api/sportscore1"){
                const premierFootballData = response.data.data[0].standings_rows;
                premierFootballData.sort(compare);
                //console.log(premierFootballData);
                //setStandings(premierFootballData);
            }
        }).catch(error => console.error(`Error: ${error}`));
        /* need to fix this where it goes to MainTextBox
        return(
            <MainTextBox data={sport}/>
        )*/
    }

    function compare(a,b) {
        const positionA = a.position;
        const positionB = b.position;
        let comparison = 0;
        if(positionA > positionB){
            comparison = 1;
        }
        else if(positionA < positionB){
            comparison = -1;
        }
        return comparison;
    }
}

export default FootballPage;