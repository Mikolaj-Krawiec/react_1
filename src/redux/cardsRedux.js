// selectors
export const getCardsForColumn = ({ cards }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId == columnId
  );

export const searchCards = ({ cards }, searchString ) => (

  cards.filter((card) => RegExp(searchString, 'i').test(card.title))
);

// action name creator
const reducerName = 'cards';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');
export const MOVE_CARD = createActionName('MOVE_CARD');

// action creators
export const createActionAddCard = (payload) => ({
  payload: { ...payload},
  type: ADD_CARD,
});
export const createAction_moveCard = (payload) => ({
  payload: { ...payload },
  type: MOVE_CARD,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:{
      const newCardId = statePart.length + 1;
      const newCardIndex = statePart.filter(card => card.columnId === action.payload.columnId).length;
      const newCard = {...action.payload, id: `card-${newCardId}`, index: newCardIndex};
      return [...statePart, newCard];
    }
    default:
      return statePart;
  }
}
