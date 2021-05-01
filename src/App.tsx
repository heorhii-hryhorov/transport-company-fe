import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import AddTransportContainer from './containers/AddTransportContainer/AddTransportContainer';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import NotFoundContainer from './containers/NotFoundContainer/NotFoundContainer';

const App: React.FC = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/transport/create" exact component={AddTransportContainer} />
        <Route component={NotFoundContainer} />
      </Switch>
    </>
  </Router>
);

export default App;
