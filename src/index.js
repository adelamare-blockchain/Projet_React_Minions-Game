// Librairies
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Components
import App from './App';

// Redux
import { Provider } from 'react-redux';
import {
  combineReducers,
  configureStore,
  MiddlewareArray,
} from '@reduxjs/toolkit';
import minionsReducer from './store/reducers/minions';
import saveReducer from './store/reducers/save';
import thunk from 'redux-thunk';

// Combiner les reducers
const reducer = combineReducers({
  minion: minionsReducer,
  save: saveReducer,
});

// Création du middleware
const middleware = (store) => {
  return (next) => {
    return (action) => {
      // console.log(store.getState().minion.minions);
      console.log(action.type);
      return next(action);
    };
  };
};

// ETAPE 4 : CREER LE STORE (permet de diffuser le state partout dans l'app : comme un gros magasin)
const store = configureStore({
  reducer,
  middleware: new MiddlewareArray().concat(middleware, thunk),
  // Redux DevTool
  devTools: process.env.NODE_ENV !== 'production',
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
