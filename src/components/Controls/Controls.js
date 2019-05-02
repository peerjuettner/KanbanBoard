import React, { Component } from "react";

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="control">
        <label>
          Add a thing:
          <input
            type="text"
            name="Title"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Add to Kanban" />
      </form>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCard(this.state.value);
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
}

export default Control;
