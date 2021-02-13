/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import CardWrapper from './Components/CardWrapper';
import ReactQuery from './Components/ReactQuery';
import OlympicListingsQuery from './Components/OlympicListings/OlympicListings';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <Header />
          </div>
          <div className="col-sm-12 col-md-12">
            <Route exact path="/card" component={CardWrapper} />
            <Route exact path="/reactquery" component={ReactQuery} />
            <Route exact path="/olympics" component={OlympicListingsQuery} />
          </div>
        </div>
      </div>
    </Switch>
  </Router>
);

export default App;
