import {delay, takeLatest, put, call} from 'redux-saga/effects';
import {
  SIGN_IN_ERR,
  SIGN_IN_REQ,
  SIGN_IN_RES,
  SIGN_OUT,
  SIGN_OUT_RES,
} from '../action/authAction';
import {
  deleteTokenFromStorage,
  saveTokenToStorage,
} from '../../utilities/storage';

/**
 * SignIn 관련 Saga Middleware
 */
function* signInAsync(action) {
  try {
    const {username, password} = action.payload;
    console.log('signInAsync Called: ' + username + ', ' + password);
    yield delay(1000);
    const token = 'dummy-token-wu';
    const isSaved = yield call(saveTokenToStorage, token);
    if (isSaved) {
      yield put({
        type: SIGN_IN_RES,
        token: 'dummy-token-wu',
      });
    } else {
      // 좋은 practices 는 아닌듯
      yield put({type: SIGN_IN_ERR});
      console.log('Token Save Failed');
    }
  } catch (error) {
    yield put({type: SIGN_IN_ERR});
    console.log(error);
  }
}

export function* watchSignIn() {
  yield takeLatest(SIGN_IN_REQ, signInAsync);
}

/**
 * SignOut 관련 Saga Middleware
 * */
function* signOutAsync() {
  try {
    const isRemoved = yield call(deleteTokenFromStorage);
    if (isRemoved) {
      yield put({type: SIGN_OUT_RES});
    } else {
      console.error('WHY ERROR');
    }
  } catch (e) {
    console.error('WHY_ERROR');
  }
}

export function* watchSignOut() {
  yield takeLatest(SIGN_OUT, signOutAsync);
}
