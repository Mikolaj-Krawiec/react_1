import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    index: PropTypes.number,
  };

  render() {
    const { title } = this.props;
    return (
      <article
        className={styles.component}>
        {title}
      </article>
    );
  }
}

export default Card;
