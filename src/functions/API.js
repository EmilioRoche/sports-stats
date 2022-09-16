import axios from 'axios';
import Compare from './Compare';

export const getAPI = (url) => axios.get(url).then(response => {
    //console.log(response);
    if(response.data.message !== "You have exceeded the MONTHLY quota for Requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/tipsters/api/sportscore1"){
        const premierFootballData = response.data.data[0].standings_rows;
        premierFootballData.sort(Compare);
        //console.log(premierFootballData);
        return premierFootballData;
    }
}).catch(error => console.error(`Error: ${error}`));
