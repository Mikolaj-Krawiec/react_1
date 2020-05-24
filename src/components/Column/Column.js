import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import { Droppable } from 'react-beautiful-dnd';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    cards: PropTypes.array,
    addCard: PropTypes.func,
    id: PropTypes.string,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const { title, icon, cards, addCard, id } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        <Droppable droppableId={id}>
          {(provided) => (
            <div
              className={styles.cards}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cards.map((cardData) => (
                <Card key={cardData.id} {...cardData} />
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Creator text={settings.cardCreatorText} action={addCard} />
      </section>
    );
  }
}

export default Column;
