import { combineReducers } from "redux";

import user from "./user";
import path from "./path";

export default combineReducers({
  user,
  path
});
