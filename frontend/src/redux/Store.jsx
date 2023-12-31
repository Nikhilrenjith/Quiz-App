import { configureStore } from "@reduxjs/toolkit";

/** call reducers */
import QuestionReducer from "./QuestionReducer";
import ResultReducer from "./ResultReducer";

const rootReducer = {
  questions: QuestionReducer,
  result: ResultReducer,
};

/** create store with reducer */
export default configureStore({ reducer: rootReducer });
