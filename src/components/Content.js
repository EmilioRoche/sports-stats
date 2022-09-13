import React, {useEffect, useState} from 'react';
import MainTextBox from './MainTextBox';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Content() {
    const [sports, setSports] = useState([]);
    useEffect( () => {load();}, []);

    const useSports = sports.map((sport) => {
        return(
            <div class="col-lg-4 mb-5 mb-lg-0">
                <h2 class="h4 fw-bolder">{sport.name}</h2>
                        <a class="fs-5">
                            <Link to={{
                                pathname: `/sports-stats/${sport.name}`,
                                state: sport.id
                            }}>
                            {sport.name} stats
                            </Link>
                            <i class="bi bi-arrow-right"></i>
                        </a>
            </div>
        )
    })

    return(
        <>
        <section class="py-5 border-bottom" id="features">
                <div class="container px-5 my-5">
                    <div class="row gx-5">
                        {sports && useSports}
                    </div>
                </div>
            </section>
        </>
    );
    async function load() {
        await axios.get("https://stats-sports-api.herokuapp.com").then(response => {
            console.log(response);
            if(response.data.message !== "You have exceeded the MONTHLY quota for Requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/tipsters/api/sportscore1"){
                const sportsData = response.data.data;
                setSports(sportsData);
            }
        }).catch(error => console.error(`Error: ${error}`));
        /* need to fix this where it goes to MainTextBox
        return(
            <MainTextBox data={sport}/>
        )*/
    }
}
export default Content;