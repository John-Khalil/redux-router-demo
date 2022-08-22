import { combineReducers } from "redux"
import { counter } from "./reducers"

export const appReducer=combineReducers({
    counter
})