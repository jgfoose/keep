import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../actions";

const ListItem = (props) => {
  return (
    <div className="list_item">
      <div className="list_item_text">{props.item}</div>
      <button
        className="delete_input"
        onClick={() => props.deleteItem(props.index, props.cardId, props.item)}
      >
        ✖
      </button>
    </div>
  );
};

export default connect(null, { deleteItem })(ListItem);
