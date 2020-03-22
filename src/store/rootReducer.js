import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import globalReducer from "../containers/Global/reducer";

import { globalTypes } from "../containers/Global/constants";

const rootReducer = history => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    global: globalReducer
  });
  return (state, action) => {
    let enhancedState = state;
    if (action.type === globalTypes.APP_RESET) {
      // if preserve router state
      // const { router } = state;
      // state = { router };
      // TODO: when redux persist is installed
      // for all keys defined in your persistConfig(s)
      // storage.removeItem('persist:root')
      // storage.removeItem('persist:otherKey')
      enhancedState = undefined;
    }
    return appReducer(enhancedState, action);
  };
};

export default rootReducer;
