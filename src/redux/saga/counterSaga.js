import {delay, takeEvery, takeLatest, put} from 'redux-saga/effects';
import {
  DEC_COUNTER,
  DEC_COUNTER_ASYNC,
  INC_COUNTER,
  INC_COUNTER_ASYNC,
} from '../action/counterAction';

function* incCounterAsync() {
  try {
    yield delay(2000);

    yield put({
      type: INC_COUNTER_ASYNC,
      value: 1,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* watchIncCounter() {
  yield takeLatest(INC_COUNTER, incCounterAsync);
}

function* decCounterAsync() {
  try {
    yield delay(1000);

    yield put({
      type: DEC_COUNTER_ASYNC,
      value: 1,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* watchDecCounter() {
  yield takeLatest(DEC_COUNTER, decCounterAsync);
}
