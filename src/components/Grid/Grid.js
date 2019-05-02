import React, { Component } from "react";
import Card from "../Card/Card";
import { status } from "../GridApp/CardStatus";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const todoC = this.props.cards
      .filter(c => c.status === status.Todo)
      .map(c => (
        <Card
          title={c.title}
          key={c.key}
          id={c.key}
          status={c.status}
          handleCardChange={this.props.handleCardChange}
        />
      ));
    const doingC = this.props.cards
      .filter(c => c.status === status.Doing)
      .map(c => (
        <Card
          title={c.title}
          key={c.key}
          id={c.key}
          status={c.status}
          handleCardChange={this.props.handleCardChange}
        />
      ));
    const doneC = this.props.cards
      .filter(c => c.status === status.Done)
      .map(c => (
        <Card
          title={c.title}
          key={c.key}
          id={c.key}
          status={c.status}
          handleCardChange={this.props.handleCardChange}
        />
      ));
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
}

export default Grid;
