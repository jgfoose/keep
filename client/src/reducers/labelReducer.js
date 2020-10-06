export default function (state = [], action) {
  const newState = [...state];
  switch (action.type) {
    case "FETCH_LABELS":
      return action.payload;
    case "CREATE_LABEL":
      return [...state, action.payload];
    case "DELETE_LABEL":
      newState.splice(action.payload.index, 1);
      return newState;
    default:
      return newState;
  }
}
