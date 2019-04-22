import * as ACTIONS from "../constants/path";
const { REACT_APP_PATH_API } = process.env;

export const getPaths = () => {
  return dispatch => {
    dispatch({
      type: ACTIONS.GET_PATHS_REQUESTED
    });
    return fetch(`${REACT_APP_PATH_API}`)
      .then(response => response.json(), error => console.log(error))
      .then(payload => dispatch({ type: ACTIONS.GET_PATHS, payload }));
  };
};
export const addPath = payload => {
  return dispatch => {
    dispatch({
      type: ACTIONS.ADD_PATH_REQUESTED
    });
    return fetch(`${REACT_APP_PATH_API}`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(payload => dispatch({ type: ACTIONS.ADD_PATH, payload }));
  };
};


export const setPathDetail = payload =>{
  return dispatch => dispatch({type: ACTIONS.SET_PATH_DETAIL, payload})
}

export const setPathDetailAsync = id => {
  
  return dispatch => {
    dispatch({type: ACTIONS.GET_PATH_DETAIL_REQUESTED})
    setPathDetail(id)
    return fetch(`${REACT_APP_PATH_API}/${id}`)
      .then(res => res.json())
      .then(payload => dispatch({type: ACTIONS.SET_PATH_DETAIL, payload}))
  }
}

export const AddItem = (idPath, payload) => {
  return dispatch => {
    dispatch({
      type: ACTIONS.ADD_ITEM_REQUESTED
    });
    return fetch(`${REACT_APP_PATH_API}/${idPath}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(payload => dispatch({ type: ACTIONS.UPDATE_PATH, payload }));
  };
};
