import React from "react";
import { connect } from "react-redux";
import { createCard } from "../actions";

const NewCard = (props) => {
  return (
    <button id="newCard" onClick={() => props.createCard()}>
      +
    </button>
  );
};

const mapStateToProps = (state) => {
  return { cards: state.cards };
};

export default connect(mapStateToProps, { createCard })(NewCard);
