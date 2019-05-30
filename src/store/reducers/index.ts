import {combineReducers} from "redux";
import taskReducer from './task-reducer';

const reducers = combineReducers({
  tasks: taskReducer
})

export default reducers;
