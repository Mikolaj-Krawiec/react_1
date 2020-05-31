import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import Container from '../Container/Container';
import { settings } from '../../data/dataStore';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
    addCard: PropTypes.func,
    id: PropTypes.string,
    match: PropTypes.object,
    changeSearchString: PropTypes.func,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  componentDidMount(){
    this.props.changeSearchString(this.props.match.params.id);
  }

  render() {
    const { cards } = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name="dog" />
            </span>
            Search Results
          </h3>
          {cards.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </section>
      </Container>
    );
  }
}

export default SearchResults;
