
import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import UserReducer from "./User/reducer";



const rootReducer = combineReducers({UserReducer});
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

