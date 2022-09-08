import React from "react";

function MainTextBox(data) {
    
    const displaySport = (data) => {
        return(    
            Object.entries(data).forEach((element) => {
                //const {sportName} = sport.name;
                return(
                    <section class="py-5 border-bottom" id="features">
                        <div class="container px-5 my-5">
                            <div class="row gx-5">
                                <div class="col-lg-4 mb-5 mb-lg-0">
                                    <h2 class="h4 fw-bolder">hi</h2>
                                        <p>hi</p>
                                            <a class="text-decoration-none" href="#!">
                                                Call to action
                                                <i class="bi bi-arrow-right"></i>
                                            </a>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })
        )
    }

    return(
        <>
            {displaySport(data)}
        </>
    )
    
}


export default MainTextBox;