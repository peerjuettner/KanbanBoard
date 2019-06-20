import React, { Component, ChangeEvent } from "react";
import { Status } from "../GridApp/CardStatus";
interface CardProps {
  title: string;
  status: Status;
  id: number;
  handleCardStatusChange: (id: number, value: Status) => void;
}

export class Card extends Component<CardProps, {}> {
  constructor(props: CardProps) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <form>
          <label className="card-label">
            {this.props.title}
            <br />
            <select onChange={this.handleCardStatusChange} value={this.props.status}>
              <option value={Status.Todo}>Todo</option>
              <option value={Status.Doing}>Doing</option>
              <option value={Status.Done}>Done</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
  handleCardStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.nodeValue);
    this.props.handleCardStatusChange(this.props.id, parseInt(event.currentTarget.value));
  };
}

export default Card;
