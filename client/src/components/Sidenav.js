import React, { Component } from "react";
import { connect } from "react-redux";
import { createLabel, updateFilter, fetchLabels } from "../actions";
import Nav from "react-bootstrap/Nav";
import Label from "./Label";

class Sidenav extends Component {
  componentDidMount() {
    this.props.fetchLabels();
  }
  render() {
    let newLabel = React.createRef();
    //Update side nav with new label on submit
    const handleNewLabel = (e) => {
      e.preventDefault();
      this.props.createLabel(newLabel.current.value);
      newLabel.current.value = "";
    };

    return (
      <Nav
        id="side_nav"
        className="flex-column side_nav mr-auto"
        bg="dark"
        variant="dark"
      >
        <Nav.Link onClick={() => this.props.updateFilter("")}>
          All Notes
        </Nav.Link>
        <React.Fragment>
          {this.props.labels.map((label, index) => (
            <Label label={label.label} key={index} index={index} />
          ))}
        </React.Fragment>
        <input
          type="text"
          className="label_input"
          placeholder="New Label"
          ref={newLabel}
        ></input>
        <button className="add_label" onClick={handleNewLabel}>
          Add Label
        </button>
      </Nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { labels: state.labels };
};

export default connect(mapStateToProps, {
  createLabel,
  updateFilter,
  fetchLabels,
})(Sidenav);
