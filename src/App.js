import React, { useState } from 'react';
import './App.css';
import Heading from './Heading';
import WorldTable from './WorldTable';
import HighScoresTable from './HighScoreTable';
import AllCountryScores from './AllCountryScores';

// const CountryNames = AllCountryScores.map((item) => {
//   return item.name;
// });






function App() {



  //sorts countries alphabetically
  const countries = AllCountryScores.sort((a, b) => {
    return a.name.localeCompare(b.name);
  })

  let worldScores = [];
  AllCountryScores.forEach((el) => {
    worldScores = worldScores.concat(el.scores).sort((a, b) => {
      if (a.s < b.s) {
        return 1;
      } else if (b.s < a.s) {
        return -1;
      } else {
        return 0;
      }
    });
  });

  // sorts order when button is clicked
  const [sort, setSort] = useState("ascending");
  const sortClickHandler = () => {
    setSort((sort) => {
      if (sort === "ascending") {
        return "descending";
      } else {
        return "ascending";
      }
      console.log('sort0', sort);
    });
  };

  return (
    <div>
      <Heading />

      <h2 className='world-scores-heading'>World High Scores Table</h2>
      <table className="world-scores table text-white">
        {worldScores.map((score, index) => (
          <WorldTable n={score.n} s={score.s} key={index} />
        ))}
      </table>
      <WorldTable />
      <button onClick={sortClickHandler}>Sort</button>
      <h2 className="country-scores-heading">Country Scores</h2>
      <HighScoresTable country={countries} sorting={sort} />

    </div>
  );

}

export default App;
