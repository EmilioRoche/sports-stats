import React, {useEffect, useState} from 'react';
import MainTextBox from './MainTextBox';
import axios from 'axios';

function Content() {
    async function load() {
        axios.get("https://stats-sports-api.herokuapp.com").then(response => {
            const sportsData = response.data.data;
            console.log(sportsData);
            setSport(sportsData);
        });
    }
    /*
    function loadContent() {
        fetch("https://stats-sports-api.herokuapp.com", {
            mode: 'no-cors',
        })
        .then((response) => response.json()).then((data) => {
            setSport(data.sport);
        }
    )}
    */
    const [sport, setSport] = useState("");
    useEffect( () => {load()}, []);

    return(
        <>
        <MainTextBox data={sport}/>
        </>
    )
}
export default Content;