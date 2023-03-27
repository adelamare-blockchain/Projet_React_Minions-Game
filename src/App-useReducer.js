import React, { useReducer } from 'react';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};

function App() {
  // STATES
  // State 1 - Reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // JSX
  return (
    <div style={{ backgroundColor: 'white', padding: '30px' }}>
      <h1>Compteur</h1>
      <div> Total : {state.count}</div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Ajouter 1
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        Retirer 1
      </button>
    </div>
  );
}

export default App;
