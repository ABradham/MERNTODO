// This is the `Root Reducer` that collects all the other reducers in our app

// Document imports
import {combineReducers} from 'redux';
import itemReducer from "./itemReducer";

// This is where all our reducers "meet". The keys here are how our downstream objects will reference their reducers
export default combineReducers({
    item: itemReducer
});