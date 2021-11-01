import React, { lazy, Suspense} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const BirdEye = lazy(() => import('./container/BirdEye'));
const EBookshop = lazy(() => import('./container/EBookshop'));
const MetaMovieReview = lazy(() => import('./container/MetaMovieReview'));
const SmartWatch = lazy(() => import('./container/SmartWatch'));

const renderLoader = () => <p>Loading...</p>


function App() {
  return (
    <Suspense fallback={renderLoader()}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/birdeye" component={BirdEye} />
          <Route exact path="/smartwatch" component={SmartWatch} />
          <Route exact path="/ebookshop" component={EBookshop} />
          <Route exact path="/metamovie" component={MetaMovieReview} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
