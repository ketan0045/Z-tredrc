import { combineReducers } from "redux";
import operationsReducer from "./todoapp/reducer/operations";

const rootReducer = combineReducers({operationsReducer});

export default rootReducer