import * as ACTIONS from '../constants/menu';

export const focus = (payload) => {
    return {
      type: ACTIONS.FOCUS_OPTION,
      payload
    };
  }