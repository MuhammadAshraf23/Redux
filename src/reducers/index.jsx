import counterReducer from '../reducers/counterReducer'
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    counterReducer
});

export default rootReducers;