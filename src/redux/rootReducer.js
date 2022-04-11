import { combineReducers } from "redux";
import postReducer from "./post/postReducer";
import commentsReducer from "./comment/commentReducer";

const rootReducer = combineReducers({
  post: postReducer,
  comment: commentsReducer,
});

export default rootReducer;
