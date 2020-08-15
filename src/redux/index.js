import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

import Categories from '../redux/Categories/reducer';
// import Drinks from '../redux/Drinks/reducer';

import CategoriesSaga from '../redux/Categories/saga';
// import DrinksSaga from '../redux/Categories/saga';

const reducers = combineReducers({
  Categories,
  // Drinks,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(CategoriesSaga);
// sagaMiddleware.run(DrinksSaga);

export default store;
