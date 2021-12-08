import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import PersonsReducer from "./reducers/PersonsReducer";

const reducer = combineReducers({
  persons: PersonsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export default store;
