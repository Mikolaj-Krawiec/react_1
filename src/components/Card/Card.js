import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <section className={styles.component}>
        <p>{this.props.title}</p>
      </section>
    );
  }
}

export default Column;
