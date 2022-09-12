import { combineReducers } from "redux";
import { alertRedecer } from "./alert.reducer";
import { authreducer } from "./reducer";

export const rootreducer = combineReducers({
    auth : authreducer,   
    alert : alertRedecer
})