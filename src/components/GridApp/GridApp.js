import React, { Component } from "react";
import Control from "../Controls/Controls";
import Grid from "../Grid/Grid";
import { status } from "./CardStatus";

class GridApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        { key: 0, title: "Feed Cat", status: status.Todo },
        { key: 1, title: "Buy food", status: status.Todo },
        { key: 2, title: "Drink Water", status: status.Doing },
        { key: 3, title: "Clean house", status: status.Doing },
        { key: 4, title: "Write React-App", status: status.Done },
        { key: 5, title: "Style things", status: status.Done }
      ],
      key: 6
    };
  }
  render() {
    return (
      <>
        <Control addCard={this.addCard} />
        <Grid
          cards={this.state.cards}
          handleCardChange={this.handleCardChange}
        />
      </>
    );
  }

  addCard = v => {
    this.setState({
      cards: [
        ...this.state.cards,
        { key: this.state.key, title: v, status: status.Todo }
      ],
      key: this.state.key + 1
    });
  };

  handleCardChange = (id, val) => {
    const changedCard = this.state.cards.filter(c => c.key === id)[0];
    changedCard.status = val;
    this.setState({
      cards: [...this.state.cards.filter(c => c.key != id), changedCard]
    });
  };
}
export default GridApp;
