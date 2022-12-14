import { combineReducers } from "redux";
import features from "./features/reducer";
import components from "./components/reducer";
import views from "./views/reducer";
import cart from "./cart/reducer";
import notifications from "./notifications/reducer";
import modal from "./modal/reducer";
import steps from "./steps/reducer";
import filters from "./filters/reducer";
import fetchState from "./fetchState/reducer";
import soft from "./soft/reducer";
import filtersGroup from "./filtersGroup/reducer";
import hard from "./hard/reducer";
import help from "./help/reducer";
import pages from "./pages/reducer";
import compare from "./compare/reducer";
import spinner from "./spinner/reducer"
export default combineReducers({ features, components, views, cart, notifications, modal, spinner, steps, filters, fetchState, soft, filtersGroup, hard, help, pages, compare });
