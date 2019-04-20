import * as ACTIONS from '../constants/path';

export const loadPaths = ()=>{
    return {
        type: ACTIONS.LOAD_PATHS
    }
}

export const addPath = (payload)=>{
    return {
        type: ACTIONS.ADD_PATH,
        payload
    }
}