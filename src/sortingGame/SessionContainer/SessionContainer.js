import React, { Component } from 'react';
import { connect } from 'react-redux';

import Session from '../Session/Session';

@connect(
  null,
  dispatch => ({
    initSortingGame: dispatch.sortingGame.initSortingGame,
  }),
)
export default class SessionContainer extends Component {
  render() {
    return <Session {...this.props} />;
  }
}
