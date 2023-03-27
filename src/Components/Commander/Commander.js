// Librairies
import React from 'react';
import classes from './Commander.module.css';
import * as actionCreators from '../../store/actions/index';

// Redux
import { connect } from 'react-redux';

function Commander(props) {
  return (
    <div className={classes.Commander}>
      <button onClick={props.createMinion}>Créer un minion</button>
      <button onClick={props.destroyMinion}>
        Détruire un minion
      </button>
      <button onClick={() => props.createTeam(5)}>
        Créer une équipe de 5 minions
      </button>
      <button onClick={() => props.destroyTeam(5)}>
        Détruire une équipe de 5 minions
      </button>
      <button onClick={() => props.save(props.minions)}>
        Sauvegarder le nombre de minions infiltrés
      </button>
    </div>
  );
}

// ETAPE 5 (Redux) : ABONNEMENT AU STATE
// Mapping des states en props
const mapStateToProps = (state) => {
  return {
    minions: state.minion.minions,
  };
};

// ETAPE 6 (Redux) : RECUPERER LES ACTIONS (DISPATCH)
const mapDispatchToProps = (dispatch) => {
  return {
    createMinion: () => dispatch(actionCreators.createMinion()),
    destroyMinion: () => dispatch(actionCreators.destroyMinion()),
    createTeam: (value) => dispatch(actionCreators.createTeam(value)),
    destroyTeam: (value) =>
      dispatch(actionCreators.destroyTeam(value)),
    save: (value) => dispatch(actionCreators.save(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Commander);
