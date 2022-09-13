import React from "react";

//fix this so to separate content.js with maintextbox
function MainTextBox(sports) {
    sports.map((sport) => {
        return(
            <div class="col-lg-4 mb-5 mb-lg-0">
                <h2 class="h4 fw-bolder">{sport.name}</h2>
                        <a class="text-decoration-none" href="">
                            click here for {sport.name} stats
                            <i class="bi bi-arrow-right"></i>
                        </a>
            </div>
        )
    })  
}


export default MainTextBox;