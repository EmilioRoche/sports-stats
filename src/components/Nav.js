import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

        <div class="container px-5">
            <a class="navbar-brand" href="#!">Sports Stats</a>
        </div>


        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div id="navMainMenu" class="navbar-collapse collapse">
                <div class="navbar-nav ml-auto">
                    <Link to='/sports-stats' className="nav-item nav-link active">Home</Link>
                </div>
            </div>
        </div>
        </nav>
    )
}
export default Nav;
