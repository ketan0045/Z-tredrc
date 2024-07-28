import { combineReducers } from 'redux'
import changeNumber from './upDown'
import multiplyAction from "./multDivide"
import backChange from './bgChange';
import cardReducer from './cart';
import isLogged from './isLogged';
import calculatorReducer from './calculatorReducer';


const rootReducer = combineReducers({changeNumber,multiplyAction,bgExample:backChange,cardReducer,isLogged,calculatorReducer});
export default rootReducer;