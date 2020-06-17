import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({});

const sagaMiddleWare = reduxSaga();
function* rootSaga() {
  yield all([]);
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
export default store;

sagaMiddleWare.run(rootSaga);
