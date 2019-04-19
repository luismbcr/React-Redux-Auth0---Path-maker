import * as ACTIONS from '../constants/counter';

//Action creator
export const increment = () => {
  return {
    type: ACTIONS.INCREMENT_COUNTER
  };
}
export const incrementRequest = ()=> {
  return {
    type: ACTIONS.INCREMENT_COUNTER_REQUEST
  }
}
// Async Action Creators
export const incrementAsync = () => {
  return dispatch => {
    dispatch(incrementRequest());
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}
