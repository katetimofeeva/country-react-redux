export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.errors,
  quantityCountries: state.countries.list,
});

export const selectAllCountries = (state) => state.countries.list;

export const selectVisibleCountries = (state, { search = "", region = "" }) => {
  return state.countries.list.filter((country) => {
    return (
      country.name.toLowerCase().includes(search.toLocaleLowerCase()) &&
      country.region.includes(region)
    );
  });
};
