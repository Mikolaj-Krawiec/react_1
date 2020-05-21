import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const {title} = this.props;
    return (
      <section className={styles.component}>
        <p>{title}</p>
      </section>
    );
  }
}

export default Card;
