export const SET_LOADING = "details/SET_LOADING";
export const SET_ERROR = "details/SET_ERROR";
export const SET_COUNTRY = "details/SET_COUNTRY";
export const RESET_COUNTRY = "details/RESET_COUNTRY";
export const SET_NEIGHBORS = "details/SET_NEIGHBORS";

export const setLoadingDetails = () => ({
  type: SET_LOADING,
});

export const setErrorDetails = (message) => ({
  type: SET_ERROR,
  payload: message,
});

export const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});

export const resetCountry = () => ({
  type: RESET_COUNTRY,
});

export const setNeighbors = (codes) => ({
  type: SET_NEIGHBORS,
  payload: codes,
});

export const loadCountryByName =
  (name) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoadingDetails());
    client
      .get(api.searchByCountry(name))
      .then(({ data }) => dispatch(setCountry(data[0])))
      .catch((err) => dispatch(setErrorDetails(err.message)));
  };

export const getNeighborsByBorder =
  (borders) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.filterByCode(borders))
      .then(({ data }) =>
        dispatch(setNeighbors(data.map((country) => country.name)))
      )
      .catch((err) => console.log(err.message));
  };
