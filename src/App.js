import Navbar from './components/Navbar';
import CovidDetails from './components/CovidDetails';
import NewsArticle from './components/NewsArticle';
import News from './components/News';
import './app.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Navbar/>
      <div className="main-content">
        <NewsArticle/>
        <Switch>
          <Route exact path="/"><News key="Home" word="India"/></Route>
          <Route exact path="/Science"><News key="Science" word="Science"/></Route>
          <Route exact path="/Business"><News key="Business" word="Business"/></Route>
          <Route exact path="/India"><News key="India" word="India"/></Route>
          <Route exact path="/Sports"><News key="Sports" word="Sports"/></Route>
          <Route exact path="/Bitcoin"><News key="Bitcoin" word="Bitcoin"/></Route>
          <Route exact path="/Entertainment"><News key="Entertainment" word="Entertainment"/></Route>
          <Route exact path="/Politics"><News key="Politics" word="Politics"/></Route>
          <Route exact path="/Technology"><News key="Technology" word="Technology"/></Route>
          <Route exact path="/Health"><News key="Health" word="Health"/></Route>
          <Route exact path="/Tesla"><News key="Tesla" word="Tesla"/></Route>
          <Route exact path="/Jobs"><News key="Jobs" word="Jobs"/></Route>
          <Route exact path="/USA"><News key="USA" word="USA"/></Route>
        </Switch>
        <CovidDetails/>
      </div>
    </Router>
  );
}

export default App;
