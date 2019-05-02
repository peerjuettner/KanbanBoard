import React, { Component } from "react";
import { status } from "../GridApp/CardStatus";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <form>
          <label className="card-label">
            {this.props.title}
            <br />
            <select onChange={this.handleCardChange} value={this.props.status}>
              <option value={status.Todo}>Todo</option>
              <option value={status.Doing}>Doing</option>
              <option value={status.Done}>Done</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
  handleCardChange = event => {
    this.props.handleCardChange(this.props.id, event.target.value);
  };
}

export default Card;
