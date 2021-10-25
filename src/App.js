import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BirdEye from './container/BirdEye';
import EBookshop from './container/EBookshop';
import MetaMovieReview from './container/MetaMovieReview';
import SmartWatch from './container/SmartWatch';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/birdeye" component={BirdEye} />
          <Route exact path="/smartwatch" component={SmartWatch} />
          <Route exact path="/ebookshop" component={EBookshop} />
          <Route exact path="/metamovie" component={MetaMovieReview} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
