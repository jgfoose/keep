import React, { Component } from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { deleteCard, updateHeader, addNewItem } from "../actions";
import ColorOptions from "./ColorOptions";
import CardLabels from "./CardLabels";

class CardItem extends Component {
  colors = ["white", "yellow", "green", "red", "purple", "blue"];
  cardHeader = React.createRef();
  newListItem = React.createRef();

  render() {
    let className = `card ${this.props.color}`;

    //Update header / title on enter or tab
    const handleHeader = (e) => {
      if (e.keyCode === 13 || e.keyCode === 9) {
        this.props.updateHeader(
          this.props.index,
          this.cardHeader.current.innerHTML.trim(),
          this.props.id
        );
        e.target.blur();
      }
    };

    //Add new todo / list item on enter
    const handleNewItem = (e) => {
      if (e.keyCode === 13) {
        this.props.addNewItem(
          this.props.index,
          this.newListItem.current.value,
          this.props.id
        );
        e.target.value = "";
      }
    };

    return (
      <div className={className} id={this.props.id}>
        <div className="card_header">
          <div
            contentEditable="true"
            className="cardTitle"
            ref={this.cardHeader}
            onKeyDown={handleHeader}
            onBlur={handleHeader}
          >
            {this.props.header}
          </div>
          <button
            className="delete_card"
            onClick={() => this.props.deleteCard(this.props.id)}
          >
            ✖
          </button>
        </div>
        {this.props.items != null
          ? this.props.items.map((item, index) => (
              <ListItem
                item={this.props.items[index]}
                index={index}
                key={index}
                cardId={this.props.id}
              />
            ))
          : ""}
        <input
          type="text"
          className=""
          placeholder="+ Add a List Item"
          ref={this.newListItem}
          onKeyUp={handleNewItem}
        ></input>
        <div className="color_options">
          {this.colors.map((color) => (
            <ColorOptions color={color} cardId={this.props.id} />
          ))}
        </div>
        <CardLabels id={this.props.id} label={this.props.label} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards };
};

export default connect(mapStateToProps, {
  deleteCard,
  updateHeader,
  addNewItem,
})(CardItem);
