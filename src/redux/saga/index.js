import {all, fork} from 'redux-saga/effects';

import {watchIncCounter, watchDecCounter} from './counterSaga';

export function* rootSaga() {
  yield all([fork(watchDecCounter), fork(watchIncCounter)]);
}
