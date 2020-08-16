import api from '../../utils/api';
import {call, put, takeEvery} from 'redux-saga/effects';

import {GETDRINKSBYCATEGORY, GETDRINKSBYCATEGORYSAGA} from './type';

function* getAllDrinksByCategory({category}) {
  try {
    let params = {c: category};
    const response = yield call(api.get, 'filter.php', {params});
    let payload = response.data;

    yield put({type: GETDRINKSBYCATEGORY, payload});
  } catch (error) {
    console.log(error);
  }
}

function* searchDrinksByName({name}) {
  try {
    let params = {s: name};
    const response = yield call(api.get, 'search.php', {params});
    let payload = response.data;

    yield put({type: GETDRINKSBYCATEGORY, payload});
  } catch (error) {
    console.log(error);
  }
}

function* getDrinkByID({ID}) {
  try {
    let params = {i: ID};
    const response = yield call(api.get, 'lookup.php', {params});
    let payload = response.data;

    yield put({type: GETDRINKSBYCATEGORY, payload});
  } catch (error) {
    console.log(error);
  }
}

export default function* DrinkSaga() {
  yield takeEvery(GETDRINKSBYCATEGORYSAGA, getAllDrinksByCategory);
}
