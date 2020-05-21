import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer';
// import Creator from '../Creator/Creator';
import ReactHtmlParser from 'react-html-parser';
import { settings } from '../../data/dataStore';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };

  render() {
    const { title, image, description, columns } = this.props;
    return (
      <section className={styles.component}>
        <Hero title={title} image={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        {/* <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText}
            action={(title) => this.addColumn(title)}
          />
        </div> */}
        <div className={styles.columns}>
          {columns.map( columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
      </section>
    );
  }
}

export default List;
