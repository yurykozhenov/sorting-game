import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';

import './SortingItem.css';

class SortingItem extends Component {
  render() {
    const {
      number,
      isDragging,
      connectDragSource,
      connectDropTarget,
    } = this.props;

    return (
      connectDragSource &&
      connectDropTarget &&
      connectDragSource(
        connectDropTarget(
          <div className={`sorting-item${isDragging ? ' dragging' : ''}`}>
            {number}
          </div>,
        ),
      )
    );
  }
}

const type = 'SortingItem';

const itemSource = {
  beginDrag({ number, findItem }) {
    return { originalIndex: findItem(number).index, number };
  },

  endDrag(props, monitor) {
    const { number: droppedNumber, originalIndex } = monitor.getItem();
    const didDrop = monitor.didDrop();

    if (!didDrop) {
      props.moveItem(droppedNumber, originalIndex);
    }
  },
};

const itemTarget = {
  canDrop() {
    return false;
  },

  hover({ number: overNumber, findItem, moveItem }, monitor) {
    const { number: draggedNumber } = monitor.getItem();

    if (draggedNumber !== overNumber) {
      const { index: overIndex } = findItem(overNumber);
      moveItem(draggedNumber, overIndex);
    }
  },
};

const dragCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const dropCollect = connect => ({
  connectDropTarget: connect.dropTarget(),
});

export default DropTarget(type, itemTarget, dropCollect)(
  DragSource(type, itemSource, dragCollect)(SortingItem),
);
