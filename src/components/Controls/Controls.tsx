import React, { Component, ChangeEvent, FormEvent } from "react";

interface ControlProps {
  addCard: (title: string) => void;
}

interface ControlState {
  title: string;
}

export class Control extends Component<ControlProps, ControlState> {
  constructor(props: ControlProps) {
    super(props);
    this.state = { title: "" };
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="control">
        <label>
          {"Add a thing:"}
          <input type="text" name="Title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add to Kanban" disabled={!this.state.title} />
      </form>
    );
  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.addCard(this.state.title);
  };
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: e.currentTarget.value });
  };
}

export default Control;
