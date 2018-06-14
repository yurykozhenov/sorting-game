import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import SessionContainer from './sortingGame/SessionContainer/SessionContainer';
import SortingGameContainer from './sortingGame/SortingGameContainer/SortingGameContainer';

const App = ({ sessionId }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={() =>
        sessionId ? <SortingGameContainer /> : <SessionContainer />
      }
    />
  </Switch>
);

const mapStateToProps = state => ({
  sessionId: state.sortingGame.sessionId,
});

export default connect(mapStateToProps)(App);
