import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import { Task, Name } from '../model'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = applyMiddleware(sagaMiddleware)

const enhancers = compose(
  middlewares
)

const INITIAL_STATE: IAppState = {
  tasks: [],
  name: { name: '' },
}

const appStore = createStore(
  reducers,
  INITIAL_STATE as any,
  enhancers
)

export { appStore }

export interface IAppState {
  tasks: Task[]
  name: Name
}

sagaMiddleware.run(rootSaga)
