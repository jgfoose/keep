export default function (
  state = [
    {
      header: "Sample Card",
      cardId: 0,
      items: [
        "Add items / todo's below",
        "Color code your cards below",
        "Add labels in side nav and select the label in the dropdown below",
        "Filter through cards with the labels in side nav",
        "Add a new card with the plus button",
      ],
      label: "",
      color: "yellow",
    },
  ],
  action
) {
  let newState = [...state];
  switch (action.type) {
    case "FETCH_CARDS":
      return action.payload;
    case "CREATE_CARD":
      return [...state, action.payload];
    case "DELETE_CARD":
      newState = state.filter((card) => card.cardId !== action.payload);
      return newState;
    case "UPDATE_HEADER":
      newState[action.payload.index].header = action.payload.header;
      return newState;
    case "ADD_ITEM":
      newState[action.payload.index].items.push(action.payload.newItem);
      return newState;
    case "DELETE_ITEM":
      let cardIndex = newState.findIndex(
        (card) => card.cardId === action.payload.cardId
      );
      newState[cardIndex].items.splice(action.payload.itemIndex, 1);
      console.log(newState);
      return newState;
    case "CARD_COLOR":
      let cardColorIndex = newState.findIndex(
        (card) => card.cardId === action.payload.cardId
      );
      newState[cardColorIndex].color = action.payload.color;
      return newState;
    case "CARD_LABEL":
      let cardLabelIndex = newState.findIndex(
        (card) => card.cardId === action.payload.cardId
      );
      newState[cardLabelIndex].label = action.payload.label;
      return newState;
    default:
      return state;
  }
}
