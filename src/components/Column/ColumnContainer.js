import { connect } from 'react-redux';
import Column from './Column';
import {getCardsForList, createActionAddCard } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state , props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);