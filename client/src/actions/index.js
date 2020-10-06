import axios from "axios";
import { FETCH_USER } from "./types";

let cardId = 1;

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchCards = () => async (dispatch) => {
  const res = await axios.get("/api/cards");
  if (res.data.length > 0) {
    cardId = cardId + res.data[res.data.length - 1].cardId;
    dispatch({ type: "FETCH_CARDS", payload: res.data });
  }
};

export const fetchLabels = () => async (dispatch) => {
  const res = await axios.get("/api/labels");
  dispatch({ type: "FETCH_LABELS", payload: res.data });
};

export const createCard = () => async (dispatch) => {
  const values = {
    header: "Card Title",
    cardId: cardId++,
    items: [],
    label: "",
    color: "white",
  };
  await axios.post("/api/cards", values);
  dispatch({
    type: "CREATE_CARD",
    payload: values,
  });
};

export const deleteCard = (id) => async (dispatch) => {
  await axios.post("api/deleteCard", { id });
  dispatch({
    type: "DELETE_CARD",
    payload: id,
  });
};

export const updateHeader = (index, newHeader, id) => async (dispatch) => {
  console.log(id, newHeader);
  await axios.post("/api/cardHeader", { id, newHeader });
  dispatch({
    type: "UPDATE_HEADER",
    payload: {
      index: index,
      header: newHeader,
    },
  });
};

export const cardColor = (id, color) => async (dispatch) => {
  await axios.post("api/color", { id, color });
  dispatch({
    type: "CARD_COLOR",
    payload: {
      cardId: id,
      color: color,
    },
  });
};

export const updateCardLabel = (cardId, label) => async (dispatch) => {
  await axios.post("api/cardLabel", { cardId, label });
  dispatch({
    type: "CARD_LABEL",
    payload: { cardId: cardId, label: label },
  });
};

export const addNewItem = (index, newItem, id) => async (dispatch) => {
  await axios.post("api/addItem", { id, newItem });
  dispatch({
    type: "ADD_ITEM",
    payload: {
      index: index,
      newItem: newItem,
    },
  });
};

export const deleteItem = (itemIndex, cardId, item) => async (dispatch) => {
  await axios.post("api/deleteItem", { cardId, item });
  dispatch({
    type: "DELETE_ITEM",
    payload: {
      itemIndex: itemIndex,
      cardId: cardId,
    },
  });
};

export const createLabel = (name) => async (dispatch) => {
  await axios.post("api/addLabel", { name });
  dispatch({
    type: "CREATE_LABEL",
    payload: { label: name },
  });
};

export const deleteLabel = (index, name) => async (dispatch) => {
  await axios.post("api/deleteLabel", { name });
  dispatch({
    type: "DELETE_LABEL",
    payload: { index: index },
  });
};

export const updateFilter = (label) => {
  return {
    type: "UPDATE_FILTER",
    payload: { label: label },
  };
};
