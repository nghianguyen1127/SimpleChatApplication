// import the reducers
import { ChatReducer } from "../modules/chat/reducers/chat";
import { combineReducers } from "redux";
// define the object and call the action
const rootReducers = combineReducers({
  Chat: ChatReducer,
});
// else return default root reducer
export default rootReducers;
