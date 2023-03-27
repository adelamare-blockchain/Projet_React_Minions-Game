// Components
import actionTypes from '../actions/actionTypes';

// ETAPE 1 : REDUX TOOLKIT / CONFIGURATION STORE
// const configureStore = require('@reduxjs/toolkit').configureStore;

// ETAPE 2 : INITIALISER LE STATE
const initialState = {
  minions: 0,
};

// ETAPE 3 : CREER LE REDUCER (permet de modifier le state selon une action)
const reducer = (state = initialState, action) => {
  // CHALLENGE :
  switch (action.type) {
    // Créer action : CREATE_MINION
    case actionTypes.CREATE_MINION:
      return { minions: state.minions + 1 };

    // Créer action : DESTROY_MINION
    case actionTypes.DESTROY_MINION:
      return { minions: state.minions - 1 };

    // Créer action : CREATE_TEAM
    case actionTypes.CREATE_TEAM:
      return { minions: state.minions + action.value };

    // Créer action : DESTROY_TEAM
    case actionTypes.DESTROY_TEAM:
      return { minions: state.minions - action.value };

    // Créer action : AUTO_ENROLL
    case actionTypes.AUTO_ENROLL:
      return { minions: state.minions + action.value };

    // Retour State final
    default:
      return state;
  }
};

export default reducer;
