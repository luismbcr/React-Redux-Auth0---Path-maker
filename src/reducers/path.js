import * as ACTIONS from '../constants/path';

const initialState = {
    paths: [],
    pathDetail: {},
    isLoading: true
};


export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_PATHS_REQUESTED:
            return {
                ...state,
                isLoading: true
            }
        case ACTIONS.ADD_PATH:
            return {
                ...state,
                isLoading: false,
                paths: [...state.paths, action.payload]
            }
        case ACTIONS.REMOVE_PATH:
            return {
                ...state,
                paths: action.payload
            }
        case ACTIONS.UPDATE_PATH:
            return {
                ...state,
                isLoading: false,
                pathDetail: action.payload 
            }
        case ACTIONS.GET_PATHS: 
            return {
                ...state,
                isLoading: false,
                paths: [...action.payload]
            }
        case ACTIONS.SET_PATH_DETAIL:
            return {
                ...state,
                isLoading: false,
                pathDetail: action.payload
            }
        default:
            return state;
    }
} 