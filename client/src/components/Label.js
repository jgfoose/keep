import React from "react";
import { connect } from "react-redux";
import { deleteLabel, updateFilter } from "../actions";
import Nav from "react-bootstrap/Nav";

const Label = (props) => {
  //Delete label from side nav on click
  const handleClick = (e) => {
    e.preventDefault();
    props.deleteLabel(props.index, props.label);
  };

  return (
    <Nav.Link eventKey="link-2" onClick={() => props.updateFilter(props.label)}>
      {props.label}
      <button className="delete_label" onClick={handleClick}>
        ✖
      </button>
    </Nav.Link>
  );
};

const mapStateToProps = (state) => {
  return { labels: state.labels, filter: state.filter };
};

export default connect(mapStateToProps, { deleteLabel, updateFilter })(Label);
