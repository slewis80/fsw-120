import React from 'react';
import './App.css';
import SuperHero from './SuperHero';
import SuperHeroData from './SuperHeroData.json';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      heroDetails: SuperHeroData
    }
  }

  render() {
    const heroDetails = this.state.heroDetails.map(function(hero) {
      return (
        <SuperHero name={hero.name} show={hero.show} catchPhrase={hero.catchPhrase} imageName={hero.imageName} />
      )
    })

    return (
      <div className="App">
        {heroDetails}
      </div>
    );
  }
}

export default App;
