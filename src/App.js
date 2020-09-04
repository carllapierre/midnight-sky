import React, {Component} from 'react';
import './App.css';
import Starmap from './Components/Starmap/Starmap'
import MainContainer from './Components/Container/MainContainer';


class App extends Component {
  render() {
    return <div className="App">
      <MainContainer></MainContainer>
      <Starmap></Starmap>
    </div>
  }
}

export default App;
