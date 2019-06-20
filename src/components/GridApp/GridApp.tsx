import React, { Component } from "react";
import Control from "../Controls/Controls";
import Grid from "../Grid/Grid";
import { Status } from "./CardStatus";

interface GridAppProps {}
interface GridAppState {
  cards: Array<ICard>;
  key: number;
}

export interface ICard {
  key: number;
  title: string;
  status: Status;
}

class GridApp extends Component<GridAppProps, GridAppState> {
  constructor(props: GridAppProps) {
    super(props);

    this.state = {
      cards: [
        { key: 0, title: "Feed Cat", status: Status.Todo },
        { key: 1, title: "Buy food", status: Status.Todo },
        { key: 2, title: "Drink Water", status: Status.Doing },
        { key: 3, title: "Clean house", status: Status.Doing },
        { key: 4, title: "Write React-App", status: Status.Done },
        { key: 5, title: "Style things", status: Status.Done }
      ],
      key: 6
    };
  }
  render() {
    return (
      <>
        <Control addCard={this.addCard} />
        <Grid cards={this.state.cards} handleCardChange={this.handleCardChange} />
      </>
    );
  }

  addCard = (v: string) => {
    this.setState({
      cards: [...this.state.cards, { key: this.state.key, title: v, status: Status.Todo }],
      key: this.state.key + 1
    });
  };

  handleCardChange = (id: number, status: Status) => {
    const changedCard = this.state.cards.find(c => c.key === id)!;
    changedCard.status = status;
    this.setState({
      cards: [...this.state.cards.filter(c => c.key !== id), changedCard]
    });
  };
}
export default GridApp;
