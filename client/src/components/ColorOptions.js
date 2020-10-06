import React from "react";
import { connect } from "react-redux";
import { cardColor } from "../actions";

const ColorOptions = (props) => {
  let className = `color_option ${props.color}`;
  return (
    <div
      className={className}
      onClick={() => props.cardColor(props.cardId, props.color)}
    ></div>
  );
};

const mapStateToProps = (state) => {
  return { cards: state.cards };
};

export default connect(mapStateToProps, { cardColor })(ColorOptions);
