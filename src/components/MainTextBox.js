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