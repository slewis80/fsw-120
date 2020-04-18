import React from 'react';
import './App.css';
import VacationSpotsData from "./VacationSpotsData";
import Spot from "./Spot";

function App() {
  const vacationSpots = VacationSpotsData.map(function(spot) {
    return <Spot place={spot.place} price={spot.price} timeToGo={spot.timeToGo} />
   })

   return (
    <div className="App">
      {vacationSpots}
    </div>
  )
}

export default App;
