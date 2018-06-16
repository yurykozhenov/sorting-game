import React, { Component } from 'react';
import { connect } from 'react-redux';

import Session from '../Session/Session';
import { initSortingGame } from '../sortingGameActions';

@connect(
  null,
  { initSortingGame },
)
export default class SessionContainer extends Component {
  render() {
    return <Session {...this.props} />;
  }
}
