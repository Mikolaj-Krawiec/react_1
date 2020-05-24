import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';
import { Draggable } from 'react-beautiful-dnd';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.any,
    index: PropTypes.number,
  };

  render() {
    const { title, id, index } = this.props;
    return (
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <article
            className={styles.component}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {title}
          </article>
        )}
      </Draggable>
    );
  }
}

export default Card;
