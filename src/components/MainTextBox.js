import React from "react";

const MainTextBox =({data}) => {
    return(
        <>
            {
                Array.from(data).map((sport) =>{
                    return(
                        <section class="py-5 border-bottom" id="features">
                            <div class="container px-5 my-5">
                                <div class="row gx-5">
                                    <div class="col-lg-4 mb-5 mb-lg-0">
                                        <h2 class="h4 fw-bolder">{sport.id}</h2>
                                            <p>{sport.name}</p>
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
            }
        </>
    )
}
export default MainTextBox;