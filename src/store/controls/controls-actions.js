export const SET_SEARCH = "controls/SET_SEARCH";
export const SET_REGION = "controls/SET_REGION";
export const CLEAR_FILTER = "controls/CLEAR_FILTER";

export const setSearch = (searchValue) => ({
  type: SET_SEARCH,
  payload: searchValue,
});

export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region,
});

export const clearFilter = () => ({
  type: CLEAR_FILTER,
});
