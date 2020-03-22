/* eslint-disable import/prefer-default-export */
import { globalTypes } from "./constants";

export const globalProcessing = processing => ({
  type: globalTypes.GLOBAL_PROCESSING,
  payload: { processing }
});

export const appReset = () => ({
  type: globalTypes.APP_RESET
});

// TEST action
export const testAction = () => ({
  type: globalTypes.TEST
});
