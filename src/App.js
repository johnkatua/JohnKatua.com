import React, { lazy, Suspense} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Lottie from 'react-lottie';
import loading from './Assets/Animations/loading-circle.json';

const Welcome = lazy(() => import('./components/Welcome'));
const Home = lazy(() => import('./components/Home'));
const BirdEye = lazy(() => import('./container/BirdEye'));
const EBookshop = lazy(() => import('./container/EBookshop'));
const MetaMovieReview = lazy(() => import('./container/MetaMovieReview'));
const SmartWatch = lazy(() => import('./container/SmartWatch'));
const ContactForm = lazy(() => import('./pages/Form-Contact'))

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading,
  renderSettings: {
    preserveAspectRation: "xMidYMid slice",
  },
};

const renderLoader = () => {
  return <div className="loader">
    <Lottie options={defaultOptions} height={300} width={300} />
  </div>
}


function App() {
  return (
    <Suspense fallback={renderLoader()}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/birdeye" component={BirdEye} />
          <Route exact path="/smartwatch" component={SmartWatch} />
          <Route exact path="/ebookshop" component={EBookshop} />
          <Route exact path="/metamovie" component={MetaMovieReview} />
          <Route exact path="/form" component={ContactForm} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
