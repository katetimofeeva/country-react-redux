import {
  SET_COUNTRY,
  SET_LOADING,
  SET_ERROR,
  RESET_COUNTRY,
  SET_NEIGHBORS,
} from "./details-actions";

const initialState = {
  status: "idle",
  error: null,
  country: null,
  neighbors: null,
};
export const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRY:
      return {
        ...state,
        status: "received",
        country: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        status: "rejected",
        error: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case RESET_COUNTRY:
      return initialState;
    case SET_NEIGHBORS:
      return {
        ...state,
        neighbors: payload,
      };
    default:
      return state;
  }
};
