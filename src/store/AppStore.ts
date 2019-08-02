import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import rootSaga from './sagas'


const sagaMiddleware = createSagaMiddleware()

const middlewares = applyMiddleware(sagaMiddleware)

const enhancers = compose(
  middlewares
)

export const history = createBrowserHistory();


const appStore = createStore(
  reducers(history),
  enhancers
)

export { appStore }



sagaMiddleware.run(rootSaga)
