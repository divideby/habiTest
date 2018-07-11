import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import { state } from "./rootReducer";

const store: Store = createStore(state, composeWithDevTools());

export default store;
