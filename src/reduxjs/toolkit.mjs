function createAction(action, prepareFunction) {
  return (payload) => {
    if (prepareFunction) return { type: action, ...prepareFunction(payload) };
    if (payload) return { type: action, payload };
    return { type: action };
  };
}

export default {
  createAction,
};
