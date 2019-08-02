import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router';
import { History } from 'history'
import taskReducer from './task-reducer';
import settingReducer from './setting'

import { Task, Name, SettingsState } from '../../model'

export interface IAppState {
  settings: SettingsState,
  tasks: Task[]
  name: Name
}


export default (history: History) => combineReducers({
  router: connectRouter(history),
  tasks: taskReducer,
  settings: settingReducer
})


