import React from 'react';


function HighScoreTable(props) {
    console.log(props)
    return (
        <div className="main-container">

            {props.country.map((country) => {

                return (
                    <div className="container">
                        <h2>Country: {country.name}</h2>
                        <ul className="ul">
                            {country.scores.map((el) => {
                                return <li> <span>Name: </span> {el.n} <br></br><span>Score: </span>{el.s}</li>

                            })}
                        </ul>
                    </div>

                );
            })}

        </div>

    );


}

export default HighScoreTable;