// Librairies
import React, { useEffect } from 'react';
import classes from './App.module.css';

// Components
import Header from './Components/Header/Header';
import Commander from './Components/Commander/Commander';

// Redux
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/index';

// Redux : Préciser à App qu'on recoit des props
function App(props) {
  // CYCLE DE VIE
  useEffect(() => {
    props.autoEnroll(props.minions);
  }, []);

  // VARIABLES
  // Variable 1 - history
  let history;

  if (props.history && props.history !== '') {
    history = props.history.map((result) => (
      <div key={result.id} className={classes.result}>
        <span>
          <b>{result.value}</b> infiltrés
        </span>
        Le {new Date(result.id).toLocaleString('fr-FR')}
      </div>
    ));
  }

  // JSX
  return (
    <div className={classes.App}>
      <Header />

      <div className='container'>
        <div className={classes.content}>
          <h1>À la conquête du monde</h1>
          <div className={classes.minions}>
            <span>{props.minions}</span>
            minions infiltrés
          </div>
        </div>

        <Commander />
        {props.history && props.history !== '' ? (
          <div className={classes.content}>
            <h2>Tableau des infiltrations</h2>
            {history}
          </div>
        ) : null}
      </div>
    </div>
  );
}

// ETAPE 5 (Redux) : ABONNEMENT AU STATE
// Mapping des states en props
const mapStateToProps = (state) => {
  return {
    minions: state.minion.minions,
    history: state.save.history,
  };
};

// Récupérer les actions
const mapDispatchToProps = (dispatch) => {
  return {
    autoEnroll: (minions) =>
      dispatch(actionCreators.autoEnroll(minions)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
