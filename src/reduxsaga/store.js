import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { rootreducer } from "./reducer/rootreducer";
import rootsaga from "./saga/root.saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootreducer);

const sagaMiddleware = createSagaMiddleware();

const Middlewares = [sagaMiddleware, thunk];

export const store = createStore(
  persistedReducer,
  applyMiddleware(...Middlewares)
);
export let persistor = persistStore(store);
// return { store, persistor };

sagaMiddleware.run(rootsaga);
