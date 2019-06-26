import React, { Component } from "react";
import Card from "../Card/Card";
import { Status } from "../GridApp/CardStatus";
import { ICard } from "../GridApp/GridApp";

interface GridProps {
  cards: Array<ICard>;
  handleCardChange: (id: number, status: Status) => void;
}

export class Grid extends Component<GridProps, {}> {
  render() {
    const todoC = this.props.cards.filter(c => c.status === Status.Todo).map(c => this.mapToCard(c));
    const doingC = this.props.cards.filter(c => c.status === Status.Doing).map(c => this.mapToCard(c));
    const doneC = this.props.cards.filter(c => c.status === Status.Done).map(c => this.mapToCard(c));
    return (
      <>
        <div className="flex-wrapper">
          <div className="column">
            <h2 className="column-title">"todo"</h2>
            {todoC}
          </div>
          <div className="column">
            <h2 className="column-title">"doing"</h2>
            {doingC}
          </div>
          <div className="column">
            <h2 className="column-title">"done"</h2>
            {doneC}
          </div>
        </div>
      </>
    );
  }

  mapToCard = (c: ICard) => {
    return (
      <Card
        title={c.title}
        key={c.key}
        id={c.key}
        status={c.status}
        handleCardStatusChange={this.props.handleCardChange}
      />
    );
  };
}

export default Grid;
