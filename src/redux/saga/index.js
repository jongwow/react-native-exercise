import {all, fork} from 'redux-saga/effects';

import {watchIncCounter, watchDecCounter} from './counterSaga';
import {watchSignIn, watchSignOut} from './authSaga';

// 이렇게 사용해도 Performance에는 영향이 없을까?
export function* rootSaga() {
  yield all([
    fork(watchDecCounter),
    fork(watchIncCounter),
    fork(watchSignIn),
    fork(watchSignOut),
  ]);
}
