import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BookDetails from './Components/BookDetails';
import Home from './Components/Home';
import Notification from './Components/Notification';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/book/:nameID/:id" component={BookDetails} />
          <Route path="/book/" component={Notification} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
