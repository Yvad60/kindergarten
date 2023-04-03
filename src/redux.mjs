export function createStore(reducer, initialState) {
  let state = initialState;
  const stateListeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    stateListeners.forEach((listener) => listener());
  };

  const subScribe = (listener) => {
    stateListeners.push(listener);

    // returns the unsubscribe function to remove the listener
    return () =>
      (stateListeners = stateListeners.filter(
        (listener) => listener !== listener
      ));
  };

  const replaceReducer = (nextReducer) => {
    reducer = nextReducer;
  };

  return { getState, dispatch, subScribe, replaceReducer, combineReducers };
}

// ATTENTION: THIS MAY NOT WORK but it is expected to return a function that combines multiple reducers given to it
export function combineReducers(reducersObject) {
  return (state, action) => {
    let nextState = state;
    const reducers = Object.keys(reducersObject);
    reducers.forEach(
      (reducer) => (nextState = reducersObject[reducer](nextState, action))
    );
    return nextState;
  };
}
