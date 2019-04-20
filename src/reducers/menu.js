import * as ACTIONS from '../constants/menu';

//Initial State
const initialState = {
  selectedOption: "/",
};


export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.FOCUS_OPTION:
            return {
                ...state,
                selectedOption:action.payload
            }
        default:
            return state
    }
}