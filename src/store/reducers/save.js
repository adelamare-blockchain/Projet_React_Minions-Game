import actionTypes from '../actions/actionTypes';

// ETAPE 2 : INITIALISER LE STATE
const initialState = {
  history: [],
};

// ETAPE 3 : CREER LE REDUCER (permet de modifier le state selon une action)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE:
      return {
        history: state.history.concat({
          id: Date.now(),
          value: action.value,
        }),
      };

    default:
      return state;
  }
};

export default reducer;
