import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import SessionContainer from './session/SessionContainer/SessionContainer';
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
  sessionId: state.session.sessionId,
});

export default connect(mapStateToProps)(App);
