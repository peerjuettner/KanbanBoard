import React, { Component } from "react";
import Card from "../Card/Card";
import { Status } from "../GridApp/CardStatus";
import { ICard } from "../GridApp/GridApp";

interface GridProps {
  cards: Array<ICard>;
  handleCardChange: (id: number, status: Status) => void;
}

export class Grid extends Component<GridProps, {}> {
  constructor(props: GridProps) {
    super(props);
    this.state = {};
  }
  render() {
    const todoC = this.props.cards.filter(c => c.status === Status.Todo).map(c => this.mapToCard(c));
    const doingC = this.props.cards.filter(c => c.status === Status.Doing).map(c => this.mapToCard(c));
    const doneC = this.props.cards.filter(c => c.status === Status.Done).map(c => this.mapToCard(c));
    return (
      <>
        <div className="grid-wrapper">
          <div className="row">
            <div className="column">
              <div className="todo-column">
                <h2 className="column-title">"todo"</h2>
                {todoC}
              </div>
            </div>
            <div className="column">
              <div className="doing-column">
                <h2 className="column-title">"doing"</h2>
                {doingC}
              </div>
            </div>
            <div className="column">
              <div className="done-column">
                <h2 className="column-title">"done"</h2>
                {doneC}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  mapToCard = (c: ICard) => {
    return <Card title={c.title} key={c.key} id={c.key} status={c.status} handleCardStatusChange={this.props.handleCardChange} />;
  };
}

export default Grid;
