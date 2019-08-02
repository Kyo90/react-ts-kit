import { all, throttle, call, } from 'redux-saga/effects';
import {BaseAction, A} from '../actions'
import {cretateToken} from '../../utils/api'


function* loginSaga(action: BaseAction) {
  const {payload} = action;
  const {username, password} = payload;
  const accessToken = yield call(cretateToken, username, password)
  console.log(accessToken)
}

export function* watchUser() {
  yield all([
    throttle(1000, A.CreateToken, loginSaga)
  ])
}
