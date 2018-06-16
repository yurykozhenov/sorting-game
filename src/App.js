import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import SessionContainer from './sortingGame/SessionContainer/SessionContainer';
import SortingGameContainer from './sortingGame/SortingGameContainer/SortingGameContainer';

@connect(state => ({
  sessionId: state.sortingGame.sessionId,
}))
export default class App extends Component {
  render() {
    const { sessionId } = this.props;

    return (
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
  }
}
