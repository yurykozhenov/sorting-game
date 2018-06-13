import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { destroySession } from '../../session/sessionActions';
import { initSortingGame, moveItem, saveOrder } from '../sortingGameActions';
import SortingGame from '../SortingGame/SortingGame';

class SortingGameContainer extends Component {
  componentDidMount() {
    this.props.initSortingGame();
  }

  render() {
    const { sessionId } = this.props;

    return sessionId ? <SortingGame {...this.props} /> : <Redirect to="/" />;
  }
}

const mapStateToProps = state => ({
  sessionId: state.session.sessionId,
  numbers: state.sortingGame.numbers,
});

const mapDispatchToProps = {
  destroySession,
  initSortingGame,
  moveItem,
  saveOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortingGameContainer);
