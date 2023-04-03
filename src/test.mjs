import { combineReducers, createStore } from "./redux.mjs";

const initialState = { count: 0, todos: [], money: 0 };

const INCREMENT = {
  type: "INCREMENT",
};

const DEPOSIT = {
  type: "DEPOSIT",
};

const ADD_TODO = {
  type: "ADD_TODO",
  text: "hey",
};

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: state.todos.concat([action.text]) };
    default:
      return state;
  }
}

function count(state, action) {
  if (action.type === "INCREMENT") return { ...state, count: state.count + 1 };
  return state;
}

function money(state, action) {
  if (action.type === "DEPOSIT") return { ...state, money: state.money + 5000 };
  return state;
}

const rootReducer = combineReducers({ todos, count, money });

const store = createStore(rootReducer, initialState);

store.dispatch(INCREMENT);
store.dispatch(ADD_TODO);
store.dispatch(ADD_TODO);
store.dispatch(INCREMENT);
store.dispatch(DEPOSIT);

console.log("Now is...", store.getState());
