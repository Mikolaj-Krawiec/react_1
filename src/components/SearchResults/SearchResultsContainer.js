import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import {searchCards} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: searchCards(state , props.match.params.id),
});

export default connect(mapStateToProps)(SearchResults);