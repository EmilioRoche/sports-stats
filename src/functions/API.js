import axios from 'axios';

export const getAPI = (url) => axios.get(url).then(response => {
    //console.log(response);
    if(response.data.message !== "You have exceeded the MONTHLY quota for Requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/tipsters/api/sportscore1"){
        return response;
    }
}).catch(error => console.error(`Error: ${error}`));
