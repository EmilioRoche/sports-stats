import React, {useEffect, useState} from 'react';
import MainTextBox from './MainTextBox';
import axios from 'axios';

function Content() {
    const [sports, setSports] = useState([]);
    useEffect( () => {load();}, []);

    const useSports = sports.map((sport) => {
        return(
            <div class="col-lg-4 mb-5 mb-lg-0">
                <h2 class="h4 fw-bolder">{sport.name}</h2>
                    <p>name in paragraph</p>
                        <a class="text-decoration-none" href="#!">
                            Dummy data
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
    function load() {
        axios.get("https://stats-sports-api.herokuapp.com").then(response => {
            const sportsData = response.data.data;
            //console.log(sportsData);
            setSports(sportsData);
        }).catch(error => console.error(`Error: ${error}`));
        /*
        return(
            <MainTextBox data={sport}/>
        )*/
    }
}
export default Content;