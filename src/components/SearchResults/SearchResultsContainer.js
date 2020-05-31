import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import {searchCards} from '../../redux/cardsRedux';
import { createAction_changeSearchString } from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => ({
  cards: searchCards(state , props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);