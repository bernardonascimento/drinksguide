import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

import categories from '../redux/Categories/reducer';
import drinks from '../redux/Drinks/reducer';

import CategorySaga from '../redux/Categories/saga';
import DrinkSaga from '../redux/Drinks/saga';

const reducers = combineReducers({
  categories,
  drinks,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(CategorySaga);
sagaMiddleware.run(DrinkSaga);

export default store;
