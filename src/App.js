import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Starmap from './Components/Starmap/Starmap'
import MainContainer from './Components/Container/MainContainer';


class App extends Component {
  render() {
    return <Router>
      <Route path='/' component={() => { 
      window.location.href = 'https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548'; 
      return null;
     }}/>
    </Router>

    // <div className="App">
    //   <MainContainer></MainContainer>
    //   <Starmap></Starmap>
    // </div>
  }
}

export default App;
