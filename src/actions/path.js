import * as ACTIONS from '../constants/path';
const { REACT_APP_PATH_API }  = process.env;


export const getPaths = ()=>{
    return dispatch => {
        dispatch({
            type: ACTIONS.GET_PATHS_REQUESTED
        });
        return fetch(`${REACT_APP_PATH_API}`)
        .then(
            response => response.json(),
            error => console.log(error)
        )
        .then(
            data=> dispatch(
                {type: ACTIONS.GET_PATHS, payload: data }
            )
        )
    }
}

export const addPath = (payload)=>{
    return {
        type: ACTIONS.ADD_PATH,
        payload
    }
}