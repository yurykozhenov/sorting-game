import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import update from 'immutability-helper';

import {
  exitGame,
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
    await this.props.resumeSortingGame();
    this.setState({ numbers: this.props.numbers });
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
    const { sessionId, exitGame, saveOrder, isSorted } = this.props;

    return sessionId ? (
      <SortingGame
        exitGame={exitGame}
        numbers={this.state.numbers}
        moveItem={this.moveItem}
        saveOrder={saveOrder}
        isSorted={isSorted}
      />
    ) : (
      <Redirect to="/" />
    );
  }
}

const mapStateToProps = state => ({
  sessionId: state.sortingGame.sessionId,
  numbers: state.sortingGame.numbers,
  isSorted: state.sortingGame.isSorted,
});

const mapDispatchToProps = {
  exitGame,
  initSortingGame,
  resumeSortingGame,
  saveOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortingGameContainer);
