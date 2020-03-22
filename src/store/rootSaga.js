import { all } from "redux-saga/effects";
import watchGlobal from "../containers/Global/sagas";

export default function* root() {
  yield all([watchGlobal()]);
}
