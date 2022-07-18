import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
// import cityReducer from "./cityReducer";
// import orderReducer from "./orderReducer";
// import paymentReducer from "./paymentReducer";
import policyReducer from "./policyReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import vendorReducer from "./vendorReducer";
import countryReducer from "./countryReducer";
import stateReducer from "./stateReducer";
import currencyReducer from "./currencyReducer";
import cityReducer from "./cityReducer";
// import clusterReducer from "./clusterReducer";
// import ordersAssignedReducer from "./ordersAssignedReducer";
// import ordersCompletedReducer from "./ordersCompletedReducer";
// import orderOnTransitReducer from "./orderOnTransitReducer";
// import tripReducer from "./tripReducer";
// import tripOnTransitReducer from "./tripOnTransitReducer";
// import tripFullfilledReducer from "./tripFullfilledReducer";
// import paymentCompleteReducer from "./paymentCompleteReducer";
// import paymentPartialReducer from "./paymentPartialReducer";
// import remittanceReducer from "./remittanceReducer";
// import remittancesCompleteReducer from "./remittancesCompleteReducer";
// import RemittancesPartialReducer from "./remittancesPartialReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  category: categoryReducer,
  city: cityReducer,
  policy: policyReducer,
  product: productReducer,
  user: userReducer,
  vendor: vendorReducer,
  country: countryReducer,
  state: stateReducer,
  currency: currencyReducer,
});