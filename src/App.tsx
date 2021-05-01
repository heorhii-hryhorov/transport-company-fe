import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import AddRouteContainer from './containers/AddRouteContainer/AddRouteContainer';
import AddTransportContainer from './containers/AddTransportContainer/AddTransportContainer';
import DeleteTransportContainer from './containers/DeleteTransportContainer/DeleteTransportContainer';
import EditTransportContainer from './containers/EditTransportContainer/EditTransportContainer';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import NotFoundContainer from './containers/NotFoundContainer/NotFoundContainer';

const App: React.FC = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/transport/create" exact component={AddTransportContainer} />
        <Route path="/transport/edit" exact component={EditTransportContainer} />
        <Route path="/transport/delete" exact component={DeleteTransportContainer} />
        <Route path="/routes/create" exact component={AddRouteContainer} />
        <Route component={NotFoundContainer} />
      </Switch>
    </>
  </Router>
);

export default App;
