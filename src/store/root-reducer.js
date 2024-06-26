import { combineReducers } from "redux";
import { themeReducer } from "./theme/theme-reducer";
import { countryReducer } from "./countries/country-reducer";
import { controlsReducer } from "./controls/controls-reducer";
import { detailsReducer } from "./details/details-reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countryReducer,
  controls: controlsReducer,
  country: detailsReducer,
});
