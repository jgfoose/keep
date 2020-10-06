import React from "react";
import { connect } from "react-redux";
import { updateCardLabel } from "../actions";
import { Consumer } from "./Context";

const CardLabels = (props) => {
  return (
    <Consumer>
      {(context) => (
        <select
          className="card_label"
          id="card_labels"
          name="labels"
          value={props.label}
          onChange={(event) =>
            props.updateCardLabel(props.id, event.target.value)
          }
        >
          <option selected value>
            --Select A Label--
          </option>
          <option value="No Label">No Label</option>
          <React.Fragment>
            {props.labels.map((label) => (
              <option value={label.label}> {label.label} </option>
            ))}
          </React.Fragment>
        </select>
      )}
    </Consumer>
  );
};

const mapStateToProps = (state) => {
  return { cards: state.cards, labels: state.labels };
};

export default connect(mapStateToProps, { updateCardLabel })(CardLabels);
