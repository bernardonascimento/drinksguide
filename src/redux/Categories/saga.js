import api from '../../utils/api';
import {call, put, takeEvery} from 'redux-saga/effects';

import {GETCATEGORY, GETCATEGORYSAGA} from './type';

function* getAllCategories() {
  try {
    let params = {c: 'list'};
    const response = yield call(api.get, 'list.php', {params});
    let payload = response.data;

    yield put({type: GETCATEGORY, payload});
  } catch (error) {
    console.log(error);
  }
}

export default function* CategorySaga() {
  yield takeEvery(GETCATEGORYSAGA, getAllCategories);
}
