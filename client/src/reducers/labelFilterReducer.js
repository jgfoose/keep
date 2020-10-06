export default function (state = null, action) {
  switch (action.type) {
    case "UPDATE_FILTER":
      return action.payload.label;
    default:
      return state;
  }
}
