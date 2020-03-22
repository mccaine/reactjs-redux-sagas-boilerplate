import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

export default function configureStore(rootReducer, rootSaga) {
  const sagaMiddleware = createSagaMiddleware();
  const connectedRouter = routerMiddleware(history);

  const middlewares = [connectedRouter, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, composedEnhancers);

  // kick-off sagas
  const sagasManager = sagaMiddleware.run(rootSaga);

  return { store, sagasManager, sagaMiddleware };
}
