import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ScoreForm from './components/ScoreForm';
import './App.css';


class App extends Component {

  state = {
    score: null
  }

rollToScore = (roll, previousRoll) => {
    if (!isNaN(roll)) {
        return parseInt(roll, 10);
    }
    if (roll === 'X') {
        return 10;
    }
    if (roll === '/') {
        return (isNaN(previousRoll) ? 10 : 10 - previousRoll);
    }
    return 0;
}

calcScore = (frames) => {
    var rolls = frames.replace(/\-/g, '').split('');
    var tally = 0;
    for (var i = 0, l = rolls.length; i < l; i++) {
        tally += this.rollToScore(rolls[i], rolls[i - 1]);
        if (rolls[i] === 'X') {
            tally += this.rollToScore(rolls[i + 1]);
            tally += this.rollToScore(rolls[i + 2], rolls[i + 1]);
            if (i === l - 3) {
                break;
            }
        }
        else if (rolls[i] === '/') {
            tally += this.rollToScore(rolls[i + 1], rolls[i]);
            if (i === l - 2) {
                break;
            }
        }
    }
    this.setState({ score: tally })
}

  render() {
    return (
      <div className="App">
        <Navbar />
        <br/>
        <br/>
        <h2>Your Score: {this.state.score}</h2>
        <ScoreForm
        calcScore={this.calcScore}
         />
      </div>
    );
  }
}

export default App;
