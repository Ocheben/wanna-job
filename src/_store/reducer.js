import {CONSTANTS} from './constants';

export const initState = {
  restaurants: [],
  applications: [],
  responses: [],
  viewedResponses: [],
};

const {
  SET_RESTAURANTS,
  SET_APPLICATIONS,
  SET_RESPONSES,
  SET_VIEWED_RESPONSES,
} = CONSTANTS;

const reducer = (state = initState, action) => {
  const {type, payload} = action;
  switch (type) {
    case SET_RESTAURANTS:
      return {
        ...state,
        restaurants: payload,
      };

    case SET_APPLICATIONS:
      return {
        ...state,
        applications: payload,
      };

    case SET_RESPONSES:
      return {
        ...state,
        responses: payload,
      };

    case SET_VIEWED_RESPONSES:
      return {
        ...state,
        viewedResponses: [...state.viewedResponses, payload],
      };

    default:
      return state;
  }
};

export default reducer;
