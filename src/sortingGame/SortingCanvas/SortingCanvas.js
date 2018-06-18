import React, { Component } from 'react';
import { DragDropContext, DropTarget } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';

import SortingItem from '../SortingItem/SortingItem';

import './SortingCanvas.scss';

const type = 'SortingItem';

const itemTarget = {
  drop({ numbers, saveOrder }) {
    saveOrder({ numbers });
  },
};

@DragDropContext(TouchBackend({ enableMouseEvents: true }))
@DropTarget(type, itemTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))
export default class SortingCanvas extends Component {
  findItem = searchNumber => {
    const { numbers } = this.props;

    const index = numbers.findIndex(number => number === searchNumber);
    const number = numbers[index];

    return { number, index };
  };

  render() {
    const { numbers, moveItem, connectDropTarget } = this.props;

    return connectDropTarget(
      <div className="sorting-canvas">
        {numbers.map((number, index) => (
          <SortingItem
            key={number}
            index={index}
            number={number}
            moveItem={moveItem}
            findItem={this.findItem}
          />
        ))}
      </div>,
    );
  }
}
