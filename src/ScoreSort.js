import React from 'react'

const ScoreSort = (props) => {
    let score;

    console.log('sorting2', props.sorting);
    // console.log('country', props.country);
    // console.log('score', props.country.scores);

    if (props.sorting === 'ascending') {
        score = props.country.scores.sort((a, b) => {
            return a.s - b.s;
        })
    } else {
        score = props.country.scores.sort((a, b) => {
            return b.s - a.s;
        })
    }
    return (
        <ul className="ul">
            {score.map((el) => {

                return (

                    <li> <span>Name: </span> {el.n} <br></br><span>Score: </span>{el.s}</li>
                );
            })}
        </ul>


    )
}

export default ScoreSort;