import React from 'react';
import './App.css';
import Heading from './Heading';
import HighScoresTable from './HighScoreTable';
import AllCountryScores from './AllCountryScores';

// const CountryNames = AllCountryScores.map((item) => {
//   return item.name;
// });




function App() {
  return (
    <div>
      <Heading />
      <HighScoresTable country={AllCountryScores} />

    </div>
  );

}

export default App;
