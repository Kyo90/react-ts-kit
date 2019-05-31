import { all, throttle, call, } from 'redux-saga/effects';
import {login, BaseAction} from '../actions'
import {cretateToken} from '../../utils/api'
import {generateNewNumber} from '../../service'




function* loginSaga(action: BaseAction) {
  const {payload} = action;
  const {username, password} = payload;
  const accessToken = yield call(cretateToken, username, password)
  console.log(accessToken)
}

export function* watchUser() {
  yield all([
    throttle(1000, login, loginSaga)
  ])
}
