import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import update from 'immutability-helper';

import { destroySession } from '../../session/sessionActions';
import {
  initSortingGame,
  resumeSortingGame,
  saveOrder,
} from '../sortingGameActions';
import SortingGame from '../SortingGame/SortingGame';

class SortingGameContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: this.props.numbers,
    };
  }

  async componentDidMount() {
    if (this.props.isNewSession) {
      await this.props.initSortingGame();
      this.setState({ numbers: this.props.numbers });
    } else {
      await this.props.resumeSortingGame();
      this.setState({ numbers: this.props.numbers });
    }
  }

  moveItem = (number, targetIndex) => {
    this.setState(
      update(this.state, {
        numbers: {
          $splice: [
            [
              this.state.numbers.findIndex(
                originalNumber => originalNumber === number,
              ),
              1,
            ],
            [targetIndex, 0, number],
          ],
        },
      }),
    );
  };

  render() {
    const { sessionId, destroySession, saveOrder } = this.props;

    return sessionId ? (
      <SortingGame
        destroySession={destroySession}
        numbers={this.state.numbers}
        moveItem={this.moveItem}
        saveOrder={saveOrder}
        hasWon={this.checkWinCondition()}
      />
    ) : (
      <Redirect to="/" />
    );
  }

  checkWinCondition = () => {
    const { numbers } = this.props;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > numbers[i + 1]) {
        return false;
      }
    }

    return true;
  };
}

const mapStateToProps = state => ({
  sessionId: state.session.sessionId,
  numbers: state.sortingGame.numbers,
  isNewSession: state.session.isNewSession,
});

const mapDispatchToProps = {
  destroySession,
  initSortingGame,
  resumeSortingGame,
  saveOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortingGameContainer);
