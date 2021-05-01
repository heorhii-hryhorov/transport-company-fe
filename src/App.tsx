import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeContainer from './containers/HomeContainer/HomeContainer';

const App: React.FC = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={HomeContainer} />
      </Switch>
    </>
  </Router>
);

export default App;
