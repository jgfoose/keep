import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCards } from "../actions";

import CardItem from "./CardItem";

class Cards extends Component {
  componentDidMount() {
    this.props.fetchCards();
  }

  render() {
    //If label in side nav is selected, pull only cards with matching label
    let filteredCards = [];
    if (this.props.filter !== null && this.props.filter !== "") {
      filteredCards = this.props.cards.filter(
        (card) => card.label === this.props.filter
      );
    } else filteredCards = this.props.cards;

    return (
      <React.Fragment>
        {filteredCards.length > 0
          ? filteredCards.map((card, index) => (
              <CardItem
                {...card}
                id={card.cardId}
                key={card.cardId}
                index={index}
              />
            ))
          : ""}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards, filter: state.filter };
};

export default connect(mapStateToProps, { fetchCards })(Cards);
