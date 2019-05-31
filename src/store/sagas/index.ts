import { all } from 'redux-saga/effects';
import { watchUser } from './watchUser';

export default function* rootSaga() {
  yield all([
    watchUser()
  ])
}
