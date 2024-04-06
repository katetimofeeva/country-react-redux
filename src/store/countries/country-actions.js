export const SET_ALL_COUNTRIES = "country/SET_ALL_COUNTRIES";
export const SET_LOADING = "country/SET_LOADING";
export const SET_ERRORS = "country/SET_ERRORS";

export const setAllCountries = (countries) => ({
  type: SET_ALL_COUNTRIES,
  payload: countries,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setErrors = (err) => ({
  type: SET_ERRORS,
  payload: err,
});

export const loadCountries =
  () =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());
    client
      .get(api.ALL_COUNTRIES)
      .then(({ data }) => dispatch(setAllCountries(data)))
      .catch((err) => dispatch(setErrors(err)));
  };
