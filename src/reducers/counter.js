import * as ACTIONS from '../constants/counter';

//Initial State
const initialState = {
  count: 0,
  isLoading: false
};

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count+1,
        isLoading: false
      };
      case ACTIONS.INCREMENT_COUNTER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};
