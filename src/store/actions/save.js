import actionTypes from './actionTypes';

export const save = (value) => {
  return {
    type: actionTypes.SAVE,
    value: value,
  };
};
