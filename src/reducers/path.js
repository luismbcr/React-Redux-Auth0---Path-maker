import * as ACTIONS from '../constants/path';

const initialState = [{
    id: 1,
    title: "React Learning path"
}
];


export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_PATH:
            return {
                ...state,
                paths: action.payload
            }
        case ACTIONS.LOAD_PATHS: 
            return {
                ...state,
                paths: action.payload
            }
        default:
            return state;
    }
} 