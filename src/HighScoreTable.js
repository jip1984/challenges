import React from 'react';
import ScoreSort from './ScoreSort';



function HighScoreTable(props) {





    console.log('sorting1', props.sorting);

    return (
        <div className="main-container">


            {props.country.map((country) => {


                return (
                    <div className="container">
                        <h2>Country: {country.name}</h2>

                        <ScoreSort country={country} sorting={props.sorting} />

                    </div>

                );
            })}

        </div >
    );


}

export default HighScoreTable;