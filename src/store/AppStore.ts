import {createStore} from 'redux';
import reducers from './reducers'
import {Task, Name} from '../model'
export interface IAppState {
  tasks: Task[],
  name: Name
}

const INITIAL_STATE: IAppState = {
  tasks: [],
  name: {name: ""}
}

const appStore = createStore(
  reducers,
  INITIAL_STATE as any,
  ((window) as any).devToolsExtension &&
  ((window) as any).devToolsExtension());

export { appStore };
