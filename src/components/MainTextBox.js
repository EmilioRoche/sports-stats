import React from "react";

function MainTextBox(props) {
    const displaySport = (props) => {
        const {sports} = props;
        return(
            sports.map(sport => {
                console.log(sport.id);
                return(
                    <section>
                        <div>
                        <h2>sport: {sport.name} </h2>
                    </div>
                    </section>
                    
                    /*
                    <section class="py-5 border-bottom" id="features">
                        <div class="container px-5 my-5">
                            <div class="row gx-5">
                                <div class="col-lg-4 mb-5 mb-lg-0">
                                    <h2 class="h4 fw-bolder">{sport.id}</h2>
                                        <p>name in paragraph</p>
                                            <a class="text-decoration-none" href="#!">
                                                Dummy data
                                                <i class="bi bi-arrow-right"></i>
                                            </a>
                                </div>
                            </div>
                        </div>
                    </section>*/
                )
            })
        )
    }

    return(
        <>
            {displaySport(props)}
        </>
    )
    
}


export default MainTextBox;