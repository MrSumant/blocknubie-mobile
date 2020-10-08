import { createStore, applyMiddleware, compose } from "redux";
import Config from "../Config/DebugConfig";
import createSagaMiddleware from "redux-saga";

// creates the store
export default (rootReducer: any, rootSaga: any) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Saga Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware({});
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));
  enhancers.push(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  const store = createStore(rootReducer, compose(...enhancers));

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
};
