import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import configureStore, { history } from './configureStore';

export default () => {
  const finalReducers = rootReducer(history);

  // if rehydration is on use persistReducer
  // if (ReduxPersist.active) {
  //   const persistConfig = ReduxPersist.storeConfig
  //   finalReducers = persistReducer(persistConfig, rootReducer(history))
  // }

  const { store } = configureStore(finalReducers, rootSaga);

  return store;
};
