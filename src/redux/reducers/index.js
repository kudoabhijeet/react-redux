import counterReducer from './counter';
import {combineReducers} from 'redux';


const reducers = combineReducers({
    counter : counterReducer
});
export default reducers