import { SET_ALL_COUNTRIES, SET_ERRORS, SET_LOADING } from "./country-actions";

const initialState = {
  status: "idle",
  list: [],
  errors: null,
};

export const countryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_COUNTRIES: {
      return {
        ...state,
        list: payload,
        status: "received",
        errors: null,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        status: "loading",
        errors: null,
      };
    }
    case SET_ERRORS: {
      return {
        ...state,
        errors: payload,
        status: "rejected",
      };
    }
    default:
      return state;
  }
};
