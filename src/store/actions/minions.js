import actionTypes from './actionTypes';

export const createMinion = () => {
  return {
    type: actionTypes.CREATE_MINION,
  };
};

export const destroyMinion = () => {
  return {
    type: actionTypes.DESTROY_MINION,
  };
};

export const createTeam = (value) => {
  return {
    type: actionTypes.CREATE_TEAM,
    value: value,
  };
};

export const destroyTeam = (value) => {
  return {
    type: actionTypes.DESTROY_TEAM,
    value: value,
  };
};

const autoEnrollAsync = (minions) => {
  return {
    type: actionTypes.AUTO_ENROLL,
    value: minions + 1,
  };
};

export const autoEnroll = (minions) => {
  return (dispatch) => {
    setInterval(() => {
      dispatch(autoEnrollAsync(minions));
    }, 4000);
  };
};
