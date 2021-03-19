import React from 'react';
import './App.css';
import Heading from './Heading';
import HighScoresTable from './HighScoreTable';
import AllCountryScores from './AllCountryScores';

// const CountryNames = AllCountryScores.map((item) => {
//   return item.name;
// });






function App() {

  const countries = AllCountryScores.sort((a, b) => {
    return a.name.localeCompare(b.name);
  })
  return (
    <div>
      <Heading />
      <HighScoresTable country={countries} />

    </div>
  );

}

export default App;
