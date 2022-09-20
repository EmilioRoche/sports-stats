import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as API from '../functions/API';

function Content() {
    const [sports, setSports] = useState([]);
    useEffect( () => {
        async function getSportData(){
            const response = await API.getAPI("https://stats-sports-api.herokuapp.com");
            const sData = response.data.data;
            setSports(sData);
        } getSportData();}, []);

    const useSports = sports.map((sport) => {
        return(
            <div class="col-lg-4 mb-5 mb-lg-0">
                <h2 class="h4 fw-bolder">{sport.name}</h2>
                        <a class="fs-5">
                            <Link to={{
                                pathname: `/sports-stats/${sport.name}`,
                                //don't think i need the sport.id here maybe?
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
}
export default Content;