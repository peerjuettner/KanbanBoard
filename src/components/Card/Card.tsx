import React, { Component, ChangeEvent } from "react";
import { Status } from "../GridApp/CardStatus";
interface CardProps {
  title: string;
  status: Status;
  id: number;
  handleCardStatusChange: (id: number, value: Status) => void;
}
enum ButtonType {
  left,
  right
}

export class Card extends Component<CardProps, {}> {
  render() {
    return (
      <div className="card">
        <form>
          <label className="card-label">
            {this.props.title}
            <br />
            {this.props.status !== Status.Todo && (
              <button onClick={e => this.handleButtonClick(e, ButtonType.left)}>{"<--"}</button>
            )}

            <select onChange={this.handleCardStatusChange} value={this.props.status}>
              <option value={Status.Todo}>Todo</option>
              <option value={Status.Doing}>Doing</option>
              <option value={Status.Done}>Done</option>
            </select>
            {this.props.status !== Status.Done && (
              <button onClick={e => this.handleButtonClick(e, ButtonType.right)}>{"-->"}</button>
            )}
          </label>
        </form>
      </div>
    );
  }
  handleCardStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.nodeValue);
    this.props.handleCardStatusChange(this.props.id, parseInt(event.currentTarget.value));
  };

  handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, type: ButtonType) => {
    e.preventDefault();
    if (type === ButtonType.left) {
      this.props.handleCardStatusChange(this.props.id, this.props.status - 1);
    } else {
      this.props.handleCardStatusChange(this.props.id, this.props.status + 1);
    }
  };
}

export default Card;
